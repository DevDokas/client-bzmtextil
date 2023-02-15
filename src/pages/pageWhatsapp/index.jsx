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
} from './styles';

import bzmlogo from '../../assets/bzmlogo.png';
import whatsapp from '../../assets/whatsapp.png';
import woman1 from '../../assets/woman1.jpg';
import woman2 from '../../assets/woman2.jpg';
import woman3 from '../../assets/woman3.jpg';

export default function WhatsApp() {
  const navigate = useNavigate();

  return (
    <Container>
      <Logo src={bzmlogo} onClick={() => navigate(-1)} />
      <Title>Contate-nos também pelo WhatsApp!</Title>
      <WhatsAppLogo src={whatsapp} />
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
            Patrícia
          </Link>
        </Item>
      </List>
    </Container>
  );
}
