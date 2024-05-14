import styled from "styled-components";
import { bg, landing } from "../../assets";
import { color } from "../../theme/color";
import { fonts } from "../../theme/font";
import { FaArrowLeft } from "react-icons/fa";

export const LandingPageBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${landing});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SignupBackground = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  width: 50%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${color.white.white};
`;

export const LoginFormContainer = styled.div`
  width: 40%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${color.white.white};
`;
export const FeedbackFormContainer = styled.div`
  width: 40%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${color.white.white};
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${color.white.white};
  background-color: ${color.primary.bleuDeFrance};
  font-size: ${fonts.fontSize.heading3};
  line-height: ${fonts.lineHeight.body3};
  padding: 0 20px;
  gap: 60px;
`;
export const LoginTopContainer = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${color.white.white};
  background-color: ${color.primary.bleuDeFrance};
  font-size: ${fonts.fontSize.heading3};
  line-height: ${fonts.lineHeight.body3};
  padding: 0 20px;
  gap: 60px;
`;

export const FeedbackTopContainer = styled.div`
  width: 100%;
  height: 15%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: ${color.white.white};
  background-color: ${color.primary.bleuDeFrance};
  font-size: ${fonts.fontSize.heading3};
  line-height: ${fonts.lineHeight.body3};
  padding: 0 20px;
  gap: 60px;
`;

export const TitleText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  /* color: ${color.black.spanishGray}; */

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body1};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }
`;

export const ArrowLeft = styled(FaArrowLeft)`
  font-size: 2rem;
`;
