import React from "react";
import Login from "../../component/login/Login";

import {
  SignupBackground,
  FormContainer,
  TopContainer,
  TitleText,
  ArrowLeft,
  LoginFormContainer,
  LoginTopContainer,
} from "../signup/SignupPage.styles";

const LoginPage = () => {
  return (
    <div>
      <SignupBackground>
        <LoginFormContainer>
          <LoginTopContainer>
            <ArrowLeft />
            Login
          </LoginTopContainer>
          <Login />
        </LoginFormContainer>
      </SignupBackground>
    </div>
  );
};

export default LoginPage;
