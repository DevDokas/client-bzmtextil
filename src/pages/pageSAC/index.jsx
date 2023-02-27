import React, { useState } from 'react';
import { toast } from 'react-toastify';

import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import {
  Container,
  InputContainer,
  Logo,
  Form,
  Title,
  SACImage,
  Input,
  InputMessage,
  SubmitButton,
} from './styles';

import bzmlogo from '../../assets/bzmlogo.png';
import sac from '../../assets/SAC.png';

export default function SACPage() {
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function SendEmail(e) {
    e.preventDefault();

    if (subject === '' || email === '' || message === '') {
      toast.error('Preencha todos os campos');
    } else {
      toast.success('Deu certo');
    }
  }

  return (
    <Container>
      <Nav />
      <Link to="/">
        <Logo src={bzmlogo} />
      </Link>
      <Form onSubmit={SendEmail}>
        <Title>
          Como podemos ajudar?
          <br />
          <SACImage src={sac} alt="" />
          <br />
          Entre em contato conosco!
        </Title>
        <InputContainer>
          <Input
            type="text"
            placeholder="Assunto"
            onChange={(e) => setSubject(e.target.value)}
            value={subject}
          />
          <Input
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <InputMessage
            placeholder="Explique melhor como podemos ajuda-lo(a)."
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </InputContainer>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </Form>
      <Footer />
    </Container>
  );
}
