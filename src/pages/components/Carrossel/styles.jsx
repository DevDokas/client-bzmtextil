import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 80vh;
  overflow: hidden;
  outline: 1vh solid red;
`;

export const Slider = styled.ul`
  display: flex;
  list-style: none;
  height: 80vh;
  width: 300vw;
`;

export const Images = styled.li`
  top: 20%;
  position: relative;
  animation: slider 30s infinite ease-in-out;

  @keyframes slider {
    0% {
      left: 0vw;
    }
    33% {
      left: -100vw;
    }
    66% {
      left: -200vw;
    }
    100% {
      left: 0vw;
    }
  }
`;

export const Image = styled.img`
  height: 80vh;
  width: 100vw;
`;
