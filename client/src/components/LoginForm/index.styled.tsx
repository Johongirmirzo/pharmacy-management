import styled, { css } from "styled-components";
import {
  Form,
  FormControl,
  FormLabel,
  FormInput,
  FormButton,
  FormRoutetext,
  FormFieldError,
} from "../../styles/UI/Form/index.styled";
import {
  Alert,
  AlertText,
  AlertCancelBtn,
} from "../../styles/UI/Alert/index.styled";
import { IButtonProps } from "./index.types";

const LoginBox = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoginFormBox = styled.section`
  max-width: 400px;
  width: 90%;
  background: #fff;
  border-radius: 5px;
  padding: 25px;
  margin: 20px 0;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const LoginTextBox = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;
const LoginTitle = styled.h1`
  color: #111;
  font-weight: 600;
  font-size: 1.9rem;
`;
const LoginDescription = styled.p`
  color: #555;
  padding-top: 5px;
  font-size: 1.1rem;
`;

const LoginForm = styled(Form)``;
const LoginFormControl = styled(FormControl)`
  margin-bottom: 20px;
`;
const LoginLabel = styled(FormLabel)`
  display: inline-block;
  padding-bottom: 5px;
`;
const LoginInput = styled(FormInput)``;
const LoginButton = styled(FormButton)`
  ${(props: IButtonProps) =>
    props.isLoading &&
    css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
  transition: background 0.3s ease-out;
  &:hover {
    background: #3f7bea;
  }
`;
const LoginRoutetext = styled(FormRoutetext)`
  & a {
    color: blue;
    margin-left: 10px;
  }
`;
const LoginFieldError = styled(FormFieldError)``;
const LoginAlert = styled(Alert)``;
const LoginAlertText = styled(AlertText)``;
const LoginAlertCancelBtn = styled(AlertCancelBtn)``;

export {
  LoginBox,
  LoginFormBox,
  LoginTextBox,
  LoginTitle,
  LoginDescription,
  LoginForm,
  LoginFormControl,
  LoginLabel,
  LoginInput,
  LoginButton,
  LoginRoutetext,
  LoginFieldError,
  LoginAlert,
  LoginAlertText,
  LoginAlertCancelBtn,
};
