import styled from "styled-components";
import { fonts } from "../../theme/font";
import { color } from "../../theme/color";

// interface ButtonProps {
//   $bgColor?: string;
//   disabled?: boolean;
//   width?: string;
//   $border?: string;
//   $color?: string;
// }

export const ButtonStyle = styled.button`
  background-color: ${(props) =>
    props.disabled ? `${color.primary.water}` : props.$bgColor};
  color: ${(props) =>
    props.disabled
      ? props.$bgColor
      : props.$color
      ? props.$color
      : `${color.white.white}`};
  padding: 12px 24px;
  border-radius: 16px;
  /* box-shadow: ${(props) =>
    props.disabled ? "none" : ` 0 0 2px 1px rgba(0, 0, 0, 0.3)`}; */
  transform: ${(props) => (props.disabled ? `scale(0.98)` : ` none`)};
  cursor: pointer;
  text-align: center;
  font-weight: 400;
  display: inline-block;
  border: ${(props) => (props.$border ? `${props.$border}` : ` none`)};
  font-family: ${fonts.fontFamily.rubik};
  font-weight: ${fonts.fontWeight.medium};
  font-size: ${fonts.fontSize.body1};
  letter-spacing: ${fonts.letterSpacing.body};
  /* margin: 10px; */
  width: ${(props) => props.width};
  box-sizing: border-box;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: none;
  }

  @media screen and (max-width: 2560px) {
    /* padding: 24px 48px; */
    padding: 12px 24px;
    font-size: ${fonts.fontSize.body1};
  }

  @media screen and (max-width: 1440px) {
    padding: 12px 24px;
    font-size: ${fonts.fontSize.body2};
  }

  // @media screen and (max-width: 1024px) {

  // }

  @media screen and (max-width: 768px) {
    padding: 10px 24px;
    font-size: ${fonts.fontSize.body3};
  }

  // @media screen and (max-width: 430px) {
  // }

  @media screen and (max-width: 375px) {
    padding: 10px 18px;
    font-size: ${fonts.fontSize.body4};
  }
`;
