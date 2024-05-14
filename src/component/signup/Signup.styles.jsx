import styled from "styled-components";
import { color } from "../../theme/color";
import { fonts } from "../../theme/font";

export const FormWrapper = styled.form`
  width: 100%;
  height: auto;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  gap: 20px;
  @media screen and (max-width: 2560px) {
    gap: 35px;
    margin-top: 20px;
  }
  @media screen and (max-width: 1440px) {
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 40px;
  }
`;

export const FullNameContainer = styled.div`
  width: 100%;
  height: 89px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
`;

export const FieldContainer = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;

  @media screen and (max-width: 2560px) {
    height: 105px;
    gap: 10px;
  }
  @media screen and (max-width: 1440px) {
    height: 69px;
    gap: 2px;
  }

  @media screen and (max-width: 1024px) {
    height: 50px;
  }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
`;
export const FeedbackFieldContainer = styled.div`
  width: 100%;
  height: 69px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;

  @media screen and (max-width: 2560px) {
    height: 105px;
    gap: 10px;
  }
  @media screen and (max-width: 1440px) {
    height: 140px;
    gap: 2px;
  }

  @media screen and (max-width: 1024px) {
    height: 50px;
  }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
`;

export const Label = styled.label`
  font-size: ${fonts.fontSize.body3};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};
  /* font-style: italic; */
  /* border-bottom: 2px solid blueviolet; */
  /* padding-bottom: 5px; */

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }

  /* @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  } */

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }

  /* @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
  /* @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
`;

export const IconImg = styled.img`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 2560px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1440px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 768px) {
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 430px) {
    width: 18px;
    height: 18px;
  }
`;

export const Icon = styled.div`
  width: 24px;
  height: 24px;
  @media screen and (max-width: 2560px) {
    width: 40px;
    height: 40px;
  }
  @media screen and (max-width: 1440px) {
    width: 24px;
    height: 24px;
  }
  @media screen and (max-width: 430px) {
    width: 18px;
    height: 18px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  background-color: ${color.black.cultured};

  @media screen and (max-width: 2560px) {
    height: 60px;
  }
  @media screen and (max-width: 1440px) {
    height: 40px;
  }
  @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 430px) {
    height: 35px;
  }
`;
export const FeedbackInputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  padding: 8px 12px;
  box-sizing: border-box;
  background-color: ${color.black.cultured};

  @media screen and (max-width: 2560px) {
    height: 60px;
  }
  @media screen and (max-width: 1440px) {
    height: 100px;
  }
  @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 430px) {
    height: 35px;
  }
`;

export const CustomInput = styled.input`
  width: 100%;
  height: 24px;
  border: none;
  background-color: ${color.black.cultured};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  &:focus {
    /* border: 2px solid ${color.primary.bleuDeFrance}; */
    outline: none;
  }

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }
`;
export const CustomTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border: none;
  background-color: ${color.black.cultured};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  &:focus {
    /* border: 2px solid ${color.primary.bleuDeFrance}; */
    outline: none;
  }

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;
export const DownTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  margin-top: 10px;
  @media screen and (max-width: 430px) {
    margin-top: 5px;
  }
`;

export const InfoText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }
`;

export const ErrorText = styled.span`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  /* color: ${color.black.spanishGray}; */
  color: red;

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer2};
    line-height: ${fonts.lineHeight.footer2};
  }

  /* @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
  /* @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
`;

export const LinkText = styled.button`
  font-size: ${fonts.fontSize.footer1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.footer2};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer2};
  }
`;

// ********************** create dish form ********************
export const CreateDishFormWrapper = styled.form`
  width: 100%;
  height: auto;
  /* background: blue; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 60px;
  /* @media screen and (max-width: 2560px) {
    gap: 35px;
    margin-top: 20px;
  } */
  @media screen and (max-width: 1440px) {
    gap: 20px;
  }
  @media screen and (max-width: 1024px) {
    gap: 30px;
  }
`;

export const CustomSelect = styled.select`
  width: 100%;
  height: 24px;
  border: none;
  background-color: ${color.black.cultured};
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  &:focus {
    border: none;
    outline: none;
  }
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }
`;

export const CustomOptions = styled.option`
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.black.cultured};
`;

export const OptionText = styled.span`
  font-size: ${fonts.fontSize.body1};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.black.spanishGray};

  /* @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.body1};
    line-height: ${fonts.lineHeight.body3};
  } */
  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body2};
    line-height: ${fonts.lineHeight.body3};
  }
  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }
`;

export const CreateDishFieldContainer = styled.div`
  width: 100%;
  height: 59px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 4px;
  /* border: 2px solid red; */
  padding: 0 10px;

  /* @media screen and (max-width: 2560px) {
    height: 105px;
    gap: 10px;
  } */
  @media screen and (max-width: 1440px) {
    height: 69px;
    gap: 2px;
  }

  @media screen and (max-width: 1024px) {
    height: 50px;
  }

  // @media screen and (max-width: 768px) {

  // }

  // @media screen and (max-width: 430px) {
  // }

  // @media screen and (max-width: 375px) {
  // }
`;

export const CreateDishInputContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 8px;
  border-radius: 8px;
  padding: 0 12px;
  box-sizing: border-box;
  background-color: ${color.black.cultured};
  /* border: 2px solid blue; */

  @media screen and (max-width: 2560px) {
    height: 60px;
  }
  @media screen and (max-width: 1440px) {
    height: 40px;
  }
  @media screen and (max-width: 1024px) {
    height: 40px;
  }
  @media screen and (max-width: 430px) {
    height: 35px;
  }
`;

export const CreateDishLabel = styled.label`
  font-size: ${fonts.fontSize.body2};
  font-weight: ${fonts.fontWeight.regular};
  line-height: ${fonts.lineHeight.body3};
  letter-spacing: ${fonts.letterSpacing.body};
  color: ${color.primary.bleuDeFrance};

  /* @media screen and (max-width: 2560px) {
    font-size: ${fonts.fontSize.heading3};
    line-height: ${fonts.lineHeight.body3};
  } */

  @media screen and (max-width: 1440px) {
    font-size: ${fonts.fontSize.body3};
    line-height: ${fonts.lineHeight.body3};
  }

  @media screen and (max-width: 1024px) {
    font-size: ${fonts.fontSize.body4};
    line-height: ${fonts.lineHeight.body3};
  }

  /* @media screen and (max-width: 768px) {
    font-size: ${fonts.fontSize.display2};
    line-height: ${fonts.lineHeight.heading1};
  } */

  @media screen and (max-width: 430px) {
    font-size: ${fonts.fontSize.footer1};
    line-height: ${fonts.lineHeight.footer1};
  }

  /* @media screen and (max-width: 375px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
  /* @media screen and (max-width: 320px) {
    font-size: ${fonts.fontSize.heading1};
    line-height: ${fonts.lineHeight.heading2};
  } */
`;

export const FormFieldFlex = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 50px;
`;

export const ImageUploadWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  /* border: 2px solid blue; */
  cursor: pointer;
`;

// interface ImageUploadProps {
//   $imgurl: string | undefined;
// }

// export const CreateDishImageUpload = styled.div<ImageUploadProps>`
//   width: 100px;
//   height: 100px;
//   /* border: 2px solid red; */
//   border-radius: 100%;
//   position: relative;
//   background-image: url(${(props) => props.$imgurl});
//   background-position: center;
//   background-size: cover;
//   background-repeat: no-repeat;
// `;

export const Camera = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 75px;
  right: 0;
`;

export const ExperienceContainer = styled.div`
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  /* border: 2px solid blue; */
  gap: 10px;
`;
export const EmojiContainer = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  /* border: 2px solid red; */
`;

export const Emoji = styled.img`
  width: 60px;
  height: 60px;
  opacity: ${(props) => (props.selected ? "" : "0.5")};
`;
