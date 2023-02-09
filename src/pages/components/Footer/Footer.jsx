import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaFacebook,
} from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import { Container, List, ItemList } from './styles';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <List>
        <ItemList>
          <FaWhatsapp size={30} onClick={() => navigate('/about')} />
        </ItemList>
        <ItemList>
          <FaInstagram size={30} onClick={() => navigate('/about')} />
        </ItemList>
        <ItemList>
          <FaEnvelope size={30} onClick={() => navigate('/about')} />
        </ItemList>
        <ItemList>
          <FaFacebook size={30} onClick={() => navigate('/about')} />
        </ItemList>
      </List>
    </Container>
  );
}
