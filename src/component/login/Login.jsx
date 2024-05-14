import React, { useState } from 'react'
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../../theme/color";
import userService from "../../apiservices/userService";
// import { emailIcon, passwordIcon, userIcon } from "../../assets";
import { loginSchema } from "../../utils/validation";
import Spinner from "../spinner/Spinner";
import CustomButton from "../button/CustomButton";
import {
  CustomInput,
  DownTextContainer,
  ErrorText,
  FieldContainer,
  FormWrapper,
  Icon,
  IconImg,
  InfoText,
  InputContainer,
  Label,
  LinkText,
  TextContainer,
  FormFieldFlex,
} from "../signup/Signup.styles";

const Login = () => {
const navigate = useNavigate();
const [PassWordvisibility, setPasswordVisibility] = useState(true);
const [ConfirmPasswordvisibility, setConfirmPasswordVisibility] =
  useState(true);
const [isSubmitting, setIsSubmitting] = useState(false);

const handlePassword = () => {
  setPasswordVisibility(!PassWordvisibility);
};
const handleConfirmPassword = () => {
  setConfirmPasswordVisibility(!ConfirmPasswordvisibility);
};

const {
  register,
  handleSubmit,
  reset,
  control,
  formState: { errors, isValid },
} = useForm({ resolver: zodResolver(loginSchema) });



const onSubmit = (data) => {
  // console.log(data);

  setIsSubmitting(true);
  userService
    .loginUser(data)
    .then((res) => {
      console.log(res);
      const userData = res.data.user;
      localStorage.setItem("token", res.data.token);
      const user = JSON.stringify(userData);
      localStorage.setItem("user", user);
      toast.success(res.data.message);
      setIsSubmitting(false);
      setTimeout(() => {
       navigate("/feedback");
      }, 3000);
    })
    .catch((error) => {
      // console.log(error);
      toast.error(error.response.data.message);
      setIsSubmitting(false);
    });
};


  return (
    <><FormWrapper onSubmit={handleSubmit(onSubmit)}>
      
      {/* email */}
      <FieldContainer>
        <Label>Email</Label>
        <InputContainer>
          {/* <IconImg src={emailIcon} /> */}
          <CustomInput
            {...register("email")}
            type="email"
            placeholder="SuccessMomodu@gmail.com" />
        </InputContainer>
        {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}
      </FieldContainer>



      
        {/* password */}
        <FieldContainer>
          <Label>Password</Label>
          <InputContainer>
            {/* <IconImg src={passwordIcon} /> */}
            <CustomInput
              {...register("password")}
              type={PassWordvisibility ? "password" : "text"}
              placeholder="*********" />
            <Icon onClick={handlePassword}>
              {PassWordvisibility ? (
                <BsEyeFill
                  size={"20px"}
                  color={`${color.primary.bleuDeFrance}`} />
              ) : (
                <BsEyeSlashFill
                  size={"20px"}
                  color={`${color.primary.bleuDeFrance}`} />
              )}
            </Icon>
          </InputContainer>
          {errors.password && (
            <ErrorText>{`${errors.password.message}`}</ErrorText>
          )}
        </FieldContainer>
        
     

      <CustomButton
        bgColor={color.primary.bleuDeFrance}
        width="100%"
        disabled={!isValid}
      >
        Login {isSubmitting && <Spinner />}
      </CustomButton>
      <DownTextContainer>
        <InfoText>Dont have an account ?</InfoText>
        <Link to={"/signup"}>
          <LinkText>Sign up here</LinkText>
        </Link>
      </DownTextContainer>
    </FormWrapper><Toaster /></>
  )
}

export default Login