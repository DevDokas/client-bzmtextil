import styled from 'styled-components';
import * as Color from '../../../config/colors';

export const ContainerLoading = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const MainContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3vh;
  z-index: 2;
  height: fit-content;
  width: fit-content;
  padding: 25px;
  border: 0;
  border-radius: 3vh;
  background-color: rgba(0, 0, 0, 0.9);
`;

export const Span = styled.span`
  font-size: 5vh;
  font-weight: 700;
  z-index: 3;
  color: #c1c1c1;
`;

export const LoadingAnimation = styled.img`
  height: 10vh;
  z-index: 3;
  animation: rotation 3s infinite linear;

  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
