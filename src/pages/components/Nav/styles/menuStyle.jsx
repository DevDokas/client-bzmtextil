import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SideMenu = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 60vw;
  background-color: #cecece;
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
  margin-top: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
`;

export const MenuItem = styled.li`
  display: flex;
  justify-content: left;
  height: 50px;
  width: 100%;
  padding-left: 20px;
`;

export const LinkPage = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 34px;
`;
