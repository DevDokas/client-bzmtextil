import styled from 'styled-components';
import * as Color from '../../config/colors';

export const Container = styled.div`
  height: auto;
`;

export const Logo = styled.img`
  position: absolute;
  transform: translate(-50%, 0);
  top: 3vh;
  height: 10vh;
`;

export const Form = styled.form`
  margin-top: 140px;
  display: flex;
  flex-direction: column;
  background-color: grey;
  width: 100vw;
  padding: 15px;
  outline: 1vh solid ${Color.DetailColor};
`;

export const Title = styled.h1`
  font-size: 2.5vh;
  color: black;
`;

export const SACImage = styled.img`
  width: 80vw;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  margin-top: 25px;
  margin-bottom: 25px;
`;

export const Input = styled.input`
  height: 4.5vh;
  width: 80vw;
  background-color: #5a5a5a;
  border: 0;
`;

export const InputMessage = styled.textarea`
  resize: none;
  min-height: 18vh;
  width: 80vw;
  background-color: #5a5a5a;
  outline: 0;
  border: 0;
  border-radius: 0.3vh;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
  &[data-autocompleted] {
    background-color: transparent !important;
  }

  &:focus {
    transform: scale(1.1);
  }
`;

export const SubmitButton = styled.button`
  height: 5.5vh;
  width: 60vw;
  transition: 0.1s;

  &:active {
    background-color: red;
  }
`;

export const FooterContainer = styled.div`
  position: relative;
  height: 140px;
`;
