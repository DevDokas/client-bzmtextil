import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  overflow: hidden;
`;

export const Slider = styled(Carousel)`
  position: absolute;
  top: 16%;
  cursor: pointer;
`;

export const Image = styled.img`
  height: 70vh;
  width: 100vw;
`;

export const Title = styled.p``;
