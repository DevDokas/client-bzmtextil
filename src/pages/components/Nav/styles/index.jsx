import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import * as Color from '../../../../config/colors';

export const Container = styled.div`
  z-index: 999;
`;

export const Bars = styled(FaBars)`
  position: absolute;
  top: 3%;
  left: 20px;
  cursor: pointer;
`;
