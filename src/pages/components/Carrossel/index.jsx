import React from 'react';

import { Container, Slider, Images, Image } from './styles';

export default function Carrossel() {
  return (
    <Container>
      <Slider>
        <Images>
          <Image
            src="https://img.freepik.com/vetores-gratis/fundo-de-tela-dobrada-seda-vermelha-texteis-de-luxo_107791-1214.jpg?w=1480&t=st=1675980876~exp=1675981476~hmac=c6a640ef547513797b29a68408a9b53c01e2c12c4840cb205957d9a4b7ddb0b6"
            alt=""
          />
        </Images>
        <Images>
          <Image
            src="https://img.freepik.com/fotos-gratis/fabrica-azul_1122-374.jpg?w=1380&t=st=1675980883~exp=1675981483~hmac=a4c066e89aa619b292e704743f1439e2aef18828ab6b280b2dd969ddd5ca5441"
            alt=""
          />
        </Images>
        <Images>
          <Image
            src="https://img.freepik.com/fotos-gratis/fundo-de-textura-de-tecido-de-seda-preto_144627-30418.jpg?w=1380&t=st=1675980890~exp=1675981490~hmac=7f880459b5c634b7aa462acb34113db6fcc949e6af0ee796775e26c708bf028a"
            alt=""
          />
        </Images>
      </Slider>
    </Container>
  );
}
