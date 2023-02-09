import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw;
  background-color: grey;
  z-index: 999;
  overflow: hidden;

  animation: open 0.3s linear;

  @keyframes open {
    0% {
      width: 0vw;
    }

    100% {
      width: 60vw;
    }
  }
`;

export const CloseSideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 0vw;
  background-color: grey;
  z-index: 999;
  overflow: hidden;
  animation: close 0.2s linear;

  @keyframes close {
    0% {
      width: 60vw;
    }

    100% {
      width: 0vw;
    }
  }
`;

export const MenuList = styled.ul`
  list-style: none;
`;

export const MenuItem = styled.li``;

export const LinkPage = styled(Link)``;
