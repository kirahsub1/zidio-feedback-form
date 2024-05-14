import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../../theme/color";
import userService from "../../apiservices/userService";
// import { emailIcon, passwordIcon, userIcon } from "../../assets";
import { signUpSchema } from "../../utils/validation";
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
} from "./Signup.styles";

const SignupForm = () => {
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
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    const newData = {...data, role:"user"}
    console.log(newData);

    setIsSubmitting(true);
    userService
      .signupUser(newData)
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
        setIsSubmitting(false);
        setTimeout(() => {
          navigate("/login");
        }, 3000);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.error);
        setIsSubmitting(false);
      });
  }

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <FormFieldFlex>
          {/* firstName */}
          <FieldContainer>
            <Label>First name</Label>
            <InputContainer>
              {/* <IconImg src={userIcon} /> */}
              <CustomInput
                {...register("firstName")}
                type="text"
                placeholder="Success Momodu"
              />
            </InputContainer>
            <TextContainer>
              {/* <InfoText>first name comes first</InfoText> */}
              {errors.fullname && (
                <ErrorText>{`${errors.firstName.message}`}</ErrorText>
              )}
            </TextContainer>
          </FieldContainer>
          {/* lastName */}
          <FieldContainer>
            <Label>Last name</Label>
            <InputContainer>
              {/* <IconImg src={userIcon} /> */}
              <CustomInput
                {...register("lastName")}
                type="text"
                placeholder="Success Momodu"
              />
            </InputContainer>
            <TextContainer>
              {/* <InfoText>first name comes first</InfoText> */}
              {errors.fullname && (
                <ErrorText>{`${errors.lastName.message}`}</ErrorText>
              )}
            </TextContainer>
          </FieldContainer>
        </FormFieldFlex>

        {/* email */}
        <FieldContainer>
          <Label>Email</Label>
          <InputContainer>
            {/* <IconImg src={emailIcon} /> */}
            <CustomInput
              {...register("email")}
              type="email"
              placeholder="SuccessMomodu@gmail.com"
            />
          </InputContainer>
          {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}
        </FieldContainer>

        {/* phone */}
        <FieldContainer>
          <Label>Phone number</Label>
          <InputContainer>
            <CustomInput
              {...register("phone")}
              type="text"
              placeholder="0806000000"
            />
          </InputContainer>
          {errors.phone && <ErrorText>{`${errors.phone.message}`}</ErrorText>}
        </FieldContainer>

        <FormFieldFlex>
          {/* password */}
          <FieldContainer>
            <Label>Password</Label>
            <InputContainer>
              {/* <IconImg src={passwordIcon} /> */}
              <CustomInput
                {...register("password")}
                type={PassWordvisibility ? "password" : "text"}
                placeholder="*********"
              />
              <Icon onClick={handlePassword}>
                {PassWordvisibility ? (
                  <BsEyeFill
                    size={"20px"}
                    color={`${color.primary.bleuDeFrance}`}
                  />
                ) : (
                  <BsEyeSlashFill
                    size={"20px"}
                    color={`${color.primary.bleuDeFrance}`}
                  />
                )}
              </Icon>
            </InputContainer>
            {errors.password && (
              <ErrorText>{`${errors.password.message}`}</ErrorText>
            )}
          </FieldContainer>
          {/* confirm password */}
          <FieldContainer>
            <Label>Confirm password</Label>
            <InputContainer>
              {/* <IconImg src={passwordIcon} /> */}
              <CustomInput
                {...register("confirmPassword", {
                  // required: "confirm password is required",
                  // validate: (value: string) =>
                  //   value === getValues("password") || "Passwords must match",
                })}
                type={ConfirmPasswordvisibility ? "password" : "text"}
                placeholder="*********"
              />
              <Icon onClick={handleConfirmPassword}>
                {ConfirmPasswordvisibility ? (
                  <BsEyeFill
                    size={"20px"}
                    color={`${color.primary.bleuDeFrance}`}
                  />
                ) : (
                  <BsEyeSlashFill
                    size={"20px"}
                    color={`${color.primary.bleuDeFrance}`}
                  />
                )}
              </Icon>
            </InputContainer>
            {errors.confirm && (
              <ErrorText>{`${errors.confirmPassword.message}`}</ErrorText>
            )}
          </FieldContainer>
        </FormFieldFlex>

        <CustomButton
          bgColor={color.primary.bleuDeFrance}
          width="100%"
          disabled={!isValid}
        >
          Sign up {isSubmitting && <Spinner />}
        </CustomButton>
        <DownTextContainer>
          <InfoText>Already have an account ?</InfoText>
          <Link to={"/login"}>
            <LinkText>Log in here</LinkText>
          </Link>
        </DownTextContainer>
      </FormWrapper>
      <Toaster />
    </>
  );
};

export default SignupForm;
