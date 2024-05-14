import React from 'react'
import FeedbackForm from '../../component/signup/FeedbackForm'

import {
  SignupBackground,
  FormContainer,
  TopContainer,
  TitleText,
  ArrowLeft,
  LoginFormContainer,
  LoginTopContainer,
  FeedbackFormContainer,
  FeedbackTopContainer,
} from "../signup/SignupPage.styles";

const FeedbackPage = () => {
  return (
    <div>
      <SignupBackground>
        <FeedbackFormContainer>
          <FeedbackTopContainer>
            <ArrowLeft />
            Let's hear from you
          </FeedbackTopContainer>
          <FeedbackForm />
        </FeedbackFormContainer>
      </SignupBackground>
    </div>
  );
}

export default FeedbackPage