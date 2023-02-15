import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dbdbdb;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled.img`
  margin-top: 50px;
  height: 10vh;
  cursor: pointer;
`;

export const WhatsAppLogo = styled.img`
  height: 10vh;
  margin-top: 25px;
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  height: 120px;
  width: fit-content;
  padding: 15px;
  border-radius: 10px;
`;

export const Button = styled.button``;

export const Link = styled.a`
  font-size: 24px;
  text-decoration: none;
  color: black;
`;

export const Title = styled.p`
  font-size: 18px;
  color: black;
`;

export const ProfileImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 15px;
`;
