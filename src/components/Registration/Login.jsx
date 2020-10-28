import React from "react";
import { Link } from "react-router-dom";
import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input } from "../Profile/ProfileSetup.styles";
import { RegisterText, TextDiv, RegisterButton, AHref } from "./Login.styles.";

function LoginForm() {
  const RegisterFunc = () => {
    return <Link to="/signup">Register</Link>;
  };

  return (
    <PageWrapper>
      <H1 style={{ color: "black", "line-height": "30px" }}>Login</H1>

      <Form>
        <Labels htmlFor="email">Email</Labels>
        <Input name="email" id="email" type="email" value="" onChange="" required />
        <br />
        <Labels>Password</Labels>
        <Input name="password" id="password" type="" value="" onChange="" required />
        <GetStartedBtn style={{ margin: "auto", "margin-top": "36.6px" }} type="submit">
          Login
        </GetStartedBtn>

        <TextDiv>
          <RegisterText>Don’t have an account? </RegisterText>
          <RegisterButton>
            <AHref href="/signup"> Register </AHref>
          </RegisterButton>
        </TextDiv>
      </Form>
    </PageWrapper>
  );
}

export default LoginForm;
