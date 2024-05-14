import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import { color } from "../../theme/color";
import userService from "../../apiservices/userService";
// import { emailIcon, passwordIcon, userIcon } from "../../assets";
import { feedbackSchema } from "../../utils/validation";
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
  CustomTextArea,
  FeedbackFieldContainer,
  FeedbackInputContainer,
  ExperienceContainer,
  EmojiContainer,
  Emoji,
  OptionText,
} from "../signup/Signup.styles";
import { happiest, happy, neutral, sad, saderActive } from "../../assets";
import useStorage from "../../hooks/useStorage";

const FeedbackForm = () => {
  const navigate = useNavigate();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSelected, setIsSelected] = useState(-1);
  const [emoji, setEmoji] = useState("");
    const [error, setError] = useState(false);
    const { savedUser } = useStorage();

  const feedbackEmojis = [
    { src: saderActive, value: "worst" },
    { src: sad, value: "bad" },
    { src: neutral, value: "okay" },
    { src: happy, value: "good" },
    { src: happiest, value: "excellent" },
  ];

  const handleSelectedEmoji = (index) => {
    // console.log(index)
      setIsSelected(index);
      setEmoji(feedbackEmojis[index].value)
      setError(false)
  };

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isValid },
  } = useForm({ resolver: zodResolver(feedbackSchema) });

    const onSubmit = (data) => {
        if (!emoji) {
          setError(true);
        } else {
            
            const newData = {
              ...data,
              emoji: emoji,
              firstName: savedUser.first,
              lastName: savedUser.last,
              email: savedUser.email,
            };
            console.log(newData)
      }
      

    // setIsSubmitting(true);
    // userService
    //   .loginUser(data)
    //   .then((res) => {
    //     console.log(res);
    //     const userData = res.data.user;
    //     localStorage.setItem("token", res.data.token);
    //     const user = JSON.stringify(userData);
    //     localStorage.setItem("user", user);
    //     toast.success(res.data.message);
    //     setIsSubmitting(false);
    //     setTimeout(() => {
    //       navigate("/dashboard");
    //     }, 3000);
    //   })
    //   .catch((error) => {
    //     // console.log(error);
    //     toast.error(error.response.data.message);
    //     setIsSubmitting(false);
    //   });
  };

  return (
    <>
      <FormWrapper onSubmit={handleSubmit(onSubmit)}>
        <ExperienceContainer>
          <Label>How was your Experience</Label>
          <EmojiContainer>
            {feedbackEmojis.map((emoji, index) => (
              <Emoji
                key={emoji.src}
                selected={isSelected === index}
                src={emoji.src}
                onClick={() => handleSelectedEmoji(index)}
              />
            ))}
          </EmojiContainer>
          <OptionText>
            {isSelected < 0
              ? "Choose your Experience"
              : `it was ${feedbackEmojis[isSelected].value}`}
          </OptionText>
          {error && <ErrorText>Kindly Select an emoji</ErrorText>}
        </ExperienceContainer>
        {/* email */}
        <FeedbackFieldContainer>
          {/* <Label>Email</Label> */}
          <FeedbackInputContainer>
            {/* <IconImg src={emailIcon} /> */}
            <CustomTextArea
              {...register("feedback")}
              type="text"
              placeholder="Tell us about your experience and suggest anything we can Improve on"
            />
          </FeedbackInputContainer>
          {errors.email && <ErrorText>{`${errors.email.message}`}</ErrorText>}
        </FeedbackFieldContainer>

        <CustomButton
          bgColor={color.primary.bleuDeFrance}
          width="100%"
          disabled={!isValid}
        >
          Send Feedback {isSubmitting && <Spinner />}
        </CustomButton>
        <DownTextContainer>
          {/* <InfoText>Dont have an account ?</InfoText>
          <Link to={"/signup"}>
            <LinkText>Sign up here</LinkText>
          </Link> */}
        </DownTextContainer>
      </FormWrapper>
      <Toaster />
    </>
  );
};

export default FeedbackForm;
