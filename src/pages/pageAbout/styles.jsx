import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
  position: relative;
  height: 180vh;
  width: 100vw;
  overflow: hidden;
`;

export const Logo = styled.img`
  position: absolute;
  transform: translate(-50%, 0);
  top: 3vh;
  height: 10vh;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AboutContainer = styled.div`
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const AboutMedia = styled.video`
  height: 40vh;
  min-width: 100%;
`;

export const AboutP = styled.p`
  color: #141414;
  font-size: 22px;
  line-height: 1.2;
  background-color: ${Color.SectionTextColor};
  height: 400px;
  padding: 15px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 3vh;
  color: #141414;
  height: 50px;
  width: 100%;
  background-color: ${Color.DetailColor};
`;

export const LocationContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Map = styled.iframe`
  height: 50vh;
  width: 100%;
  border: 0;
`;
