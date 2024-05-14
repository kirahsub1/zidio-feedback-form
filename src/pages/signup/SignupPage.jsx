import React from 'react'
import SignupForm from '../../component/signup/Signup'
import {
  SignupBackground,
  FormContainer,
  TopContainer,
  TitleText,
  ArrowLeft,
} from "./SignupPage.styles";

const SignupPage = () => {
  return (
      <SignupBackground>
      <FormContainer>
        <TopContainer >
          <ArrowLeft/>
          Sign Up
        </TopContainer>
        <SignupForm />
      </FormContainer>
    </SignupBackground>
  )
}

export default SignupPage