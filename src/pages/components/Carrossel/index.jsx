import React from 'react';
import './carrossel.css';
import { useNavigate } from 'react-router-dom';

import { Container, Slider, Image, Title } from './styles';

import tecido from '../../../assets/tecido.jpg';
import renda from '../../../assets/renda.jpg';
import aviamento from '../../../assets/aviamento.jpg';

export default function Carrossel() {
  const navigate = useNavigate();

  return (
    <Container>
      <Slider
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        swipeable
        emulateTouch
        interval={10000}
        transitionTime={1500}
        onClickItem={(index, item) => {
          if (index === 0) {
            navigate('/tecidos');
          } else if (index === 1) {
            navigate('/rendas');
          } else {
            navigate('/aviamentos');
          }
        }}
        stopOnHover
        infiniteLoop
        autoPlay
      >
        <div>
          <Image src={tecido} alt="" unselectable="on" />
          <Title className="legend">Tecidos</Title>
        </div>
        <div>
          <Image src={renda} alt="" unselectable="on" />
          <Title className="legend">Rendas</Title>
        </div>
        <div>
          <Image src={aviamento} alt="" unselectable="on" />
          <Title className="legend" font-size="30px">
            Aviamentos
          </Title>
        </div>
      </Slider>
    </Container>
  );
}
