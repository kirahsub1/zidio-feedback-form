import React from 'react'

import { ButtonStyle } from './Button.styles';

const CustomButton = ({
  disabled,
  children,
  width,
  onClick,
  border,
  bgColor,
  color,
  type,
}) => {
  return (
    <ButtonStyle
      width={width}
      disabled={disabled}
      $bgColor={bgColor}
      onClick={onClick}
      $border={border}
      $color={color}
      type={type}
    >
      {children}
    </ButtonStyle>
  );
};

export default CustomButton