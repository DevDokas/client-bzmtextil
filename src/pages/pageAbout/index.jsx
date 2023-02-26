// React & Etc
import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  AboutContainer,
  LocationContainer,
  ContentContainer,
  Logo,
  Title,
  AboutMedia,
  AboutP,
  Map,
  ImageBZM,
} from './styles';

// Components
import Nav from '../components/Nav';
import Footer from '../components/Footer';

import bzmlogo from '../../assets/bzmlogo.png';
import bzmvideo from '../../assets/videobzmtest.mp4';
import bzmfoto from '../../assets/bzmfoto.jpg';

export default function AboutApp() {
  return (
    <Container>
      <Nav />
      <Link to="/">
        <Logo src={bzmlogo} />
      </Link>
      <ContentContainer>
        <AboutContainer>
          <Title>Quem Somos</Title>
          <AboutMedia src={bzmvideo} autoPlay loop preload="auto" />
          <AboutP>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            repellendus modi provident nemo vero dolore minus velit error?
            Maxime fugiat cumque magni vel culpa ratione autem numquam expedita
            minus consectetur. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Maiores pariatur minus porro esse tempora dolor at
            accusamus distinctio, amet nulla commodi dicta temporibus, obcaecati
            voluptatibus facere itaque mollitia doloremque tenetur.
          </AboutP>
        </AboutContainer>
        <ImageBZM src={bzmfoto} />
        <LocationContainer>
          <Title>Onde Estamos</Title>
          <Map
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d929.6244737090014!2d-46.584151370762456!3d-21.251750299117365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b6439b50e5709d%3A0x95736b6675e51c28!2sR.%20Francisco%20Cruvinel%20de%20Resende%2C%20272%20-%20Juruaia%2C%20MG%2C%2037805-000!5e0!3m2!1spt-BR!2sbr!4v1676923846913!5m2!1spt-BR!2sbr"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </LocationContainer>
      </ContentContainer>
      <Footer />
    </Container>
  );
}
