// React & Etc
import React from 'react';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carrossel from '../components/Carrossel';

// Styles
import { Container } from './styles';

export default function Home() {
  return (
    <Container>
      <Nav />
      <Carrossel />
      <Footer />
    </Container>
  );
}
