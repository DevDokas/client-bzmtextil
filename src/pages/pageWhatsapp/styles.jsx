import styled from 'styled-components';

export const Container = styled.div`
  background-color: #dbdbdb;
  height: 100vh;
  width: 100vw;
`;

export const Logo = styled.img`
  margin-top: 30px;
  height: 10vh;
  cursor: pointer;
`;

export const WhatsAppLogo = styled.img`
  height: 25px;
`;

export const List = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: grey;
  padding-bottom: 20px;
  padding-top: 20px;
  height: 180px;
  width: 180px;
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
  height: 130px;
  width: 150px;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 5px;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
  font-size: 12px;
  line-height: 1.3;
  margin-top: 13px;
`;

export const LocalAddress = styled.p`
  width: 90vw;
`;

export const CellPhone = styled.p`
  width: auto;
`;
