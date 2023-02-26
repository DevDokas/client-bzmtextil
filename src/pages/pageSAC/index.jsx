import React from 'react';

import Nav from '../components/Nav';

import {
  Container,
  Form,
  Title,
  InputSubject,
  InputUserEmail,
  InputMessage,
  SubmitButton,
} from './styles';

export default function SACPage() {
  return (
    <Container>
      <Nav />
      <Form action="">
        <Title>Como podemos ajudar? Entre em contato conosco!</Title>
        <InputSubject type="text" />
        <InputUserEmail type="email" />
        <InputMessage name="" id="" cols="30" rows="10" />
        <SubmitButton>Enviar</SubmitButton>
      </Form>
    </Container>
  );
}
