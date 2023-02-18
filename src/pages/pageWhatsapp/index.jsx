import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  Logo,
  List,
  Item,
  Link,
  Title,
  WhatsAppLogo,
  ProfileImage,
  TextContainer,
  LocalAddress,
  CellPhone,
} from './styles';

import bzmlogo from '../../assets/bzmlogo.png';
import whatsapp from '../../assets/whatsapp.png';
import woman1 from '../../assets/jessica.jpg';
import woman2 from '../../assets/dayane.jpg';
import woman3 from '../../assets/patricia.jpg';

export default function WhatsApp() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={bzmlogo} onClick={() => navigate(-1)} />
      <Title>Contate-nos também pelo WhatsApp!</Title>
      <List>
        <Item>
          <ProfileImage
            src={woman1}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/message/VAPFNMXDPKKUK1?autoload=1&app_absent=0',
                '_blank'
              )
            }
          />
          <Link
            href="https://api.whatsapp.com/message/VAPFNMXDPKKUK1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppLogo src={whatsapp} />
            Jéssica
          </Link>
        </Item>
        <Item>
          <ProfileImage
            src={woman2}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/qr/34C3L2I6AYFUA1?autoload=1&app_absent=0',
                '_blank'
              )
            }
          />
          <Link
            href="https://api.whatsapp.com/qr/34C3L2I6AYFUA1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppLogo src={whatsapp} />
            Dayani
          </Link>
        </Item>
        <Item>
          <ProfileImage
            src={woman3}
            onClick={() =>
              window.open(
                'https://api.whatsapp.com/qr/7ZWXTPBAKQJZO1?autoload=1&app_absent=0',
                '_blank'
              )
            }
          />
          <Link
            href="https://api.whatsapp.com/qr/7ZWXTPBAKQJZO1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppLogo src={whatsapp} />
            Patrícia
          </Link>
        </Item>
      </List>
      <TextContainer>
        <LocalAddress>
          R. Francisco Cruvinel de Resende, 272, Mirante
        </LocalAddress>
        <LocalAddress>Juruaia - MG</LocalAddress>
        <CellPhone>(35) 3553-1894</CellPhone>
      </TextContainer>
    </Container>
  );
}
