import React, { useState } from 'react';
import { toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import {
  Container,
  InputContainer,
  FooterContainer,
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
import Loading from '../components/Loading/Loading';

export default function SACPage() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function SendEmail(e) {
    e.preventDefault();
    setIsLoading(true);
    if (name === '' || subject === '' || email === '' || message === '') {
      toast.error('Preencha todos os campos');
      setIsLoading(false);
    } else {
      const templateParams = {
        from_name: name,
        subject,
        message,
        email,
      };

      emailjs
        .send(
          'service_r1z1sz2',
          'template_m5s4olc',
          templateParams,
          'd4ut86Yz6_6cD4dGE'
        )
        .then(
          (res) => {
            toast.success('Email enviado com sucesso!');
            setName('');
            setSubject('');
            setMessage('');
            setEmail('');
            setIsLoading(false);
          },
          (err) => {
            setIsLoading(false);
            toast.error('Oops, ocorreu algo de errado...');
          }
        );
    }
  }

  return (
    <Container>
      <Loading isLoading={isLoading} />
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
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
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
      <FooterContainer>
        <Footer />
      </FooterContainer>
    </Container>
  );
}
