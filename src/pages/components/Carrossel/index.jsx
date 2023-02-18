import React from 'react';
import './carrossel.css';
import { useNavigate } from 'react-router-dom';

import { Container, Slider, Image, Title } from './styles';

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
          <Image
            src="https://img.freepik.com/vetores-gratis/fundo-de-tela-dobrada-seda-vermelha-texteis-de-luxo_107791-1214.jpg?w=1480&t=st=1675980876~exp=1675981476~hmac=c6a640ef547513797b29a68408a9b53c01e2c12c4840cb205957d9a4b7ddb0b6"
            alt=""
            unselectable="on"
          />
          <Title className="legend">Tecidos</Title>
        </div>
        <div>
          <Image
            src="https://img.freepik.com/fotos-gratis/fabrica-azul_1122-374.jpg?w=1380&t=st=1675980883~exp=1675981483~hmac=a4c066e89aa619b292e704743f1439e2aef18828ab6b280b2dd969ddd5ca5441"
            alt=""
            unselectable="on"
          />
          <Title className="legend">Rendas</Title>
        </div>
        <div>
          <Image
            src="https://img.freepik.com/fotos-gratis/fundo-de-textura-de-tecido-de-seda-preto_144627-30418.jpg?w=1380&t=st=1675980890~exp=1675981490~hmac=7f880459b5c634b7aa462acb34113db6fcc949e6af0ee796775e26c708bf028a"
            alt=""
            unselectable="on"
          />
          <Title className="legend" font-size="30px">
            Aviamentos
          </Title>
        </div>
      </Slider>
    </Container>
  );
}
