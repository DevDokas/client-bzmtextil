import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Logo, List, Item, Button } from './styles';

import bzmlogo from '../../assets/bzmlogo.png';

export default function WhatsApp() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={bzmlogo} />
      <p>Converse com nossas consultoras de vendas!</p>
      <List>
        <Item>1</Item>
        <Item>2</Item>
        <Item>3</Item>
      </List>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
    </Container>
  );
}
