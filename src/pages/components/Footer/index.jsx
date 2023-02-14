import React from 'react';
import {
  IoLogoWhatsapp,
  IoLogoInstagram,
  IoMailOutline,
  IoLogoFacebook,
} from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

import {
  Container,
  List,
  ItemList,
  TextContainer,
  LocalAddress,
  CellPhone,
} from './styles';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <Container>
      <List>
        <ItemList>
          <IoLogoWhatsapp
            size={30}
            onClick={() => navigate('/about')}
            color="black"
          />
        </ItemList>
        <ItemList>
          <IoLogoInstagram
            size={30}
            onClick={() => navigate('/about')}
            color="black"
          />
        </ItemList>
        <ItemList>
          <IoMailOutline
            size={30}
            onClick={() => navigate('/about')}
            color="black"
          />
        </ItemList>
        <ItemList>
          <IoLogoFacebook
            size={30}
            onClick={() => navigate('/about')}
            color="black"
          />
        </ItemList>
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
