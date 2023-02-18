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
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  outline: 10px #880000 solid;
`;

export const Image = styled.img`
  height: 70vh;
  width: 100vw;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;

export const Title = styled.p`
  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
`;
