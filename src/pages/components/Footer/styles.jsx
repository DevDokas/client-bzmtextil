import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  transform: translate(-50%, 0);
  bottom: 10px;
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

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 12px;
  line-height: 1.3;
`;

export const LocalAddress = styled.p`
  width: 90vw;
`;

export const CellPhone = styled.p`
  width: auto;
`;
