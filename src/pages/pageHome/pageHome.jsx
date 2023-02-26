// React & Etc
import React from 'react';
import { Link } from 'react-router-dom';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Carrossel from '../components/Carrossel';

// Styles
import { Container, Logo } from './styles';

import bzmlogo from '../../assets/bzmlogo.png';

export default function Home() {
  return (
    <Container>
      <Nav />
      <Link to="/">
        <Logo src={bzmlogo} />
      </Link>
      <Carrossel />
      <Footer />
    </Container>
  );
}
