import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 5%;
  left: 50%;
  z-index: 0;
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  width: auto;
  gap: 25px;
`;

export const ItemList = styled.li`
  cursor: pointer;
`;
