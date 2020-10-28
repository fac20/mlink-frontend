import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input } from "../Profile/ProfileSetup.styles";
import { RegisterText, TextDiv, RegisterButton, AHref, FlexDiv, AlignStartWrapper  } from "./Login.styles.";
import { FaRegEyeSlash } from "react-icons/fa";

function LoginForm() {
    const [inputType, setInputType] = useState("password");

    const RegisterFunc = () => {
      return <Link to="/signup">Register</Link>;
    };

    return (
      <PageWrapper>
        <H1 style={{ color: "black", "line-height": "30px" }}>Login</H1>

        <Form>
        <AlignStartWrapper>
          <Labels htmlFor="email">Email</Labels>
          <Input
            name="email"
            id="email"
            type="email"
            value=""
            onChange=""
            required
          />
          <br />
          <Labels>Password</Labels>
          <FlexDiv>
            <Input
              name="password"
              id="password"
              type=""
              value=""
              onChange=""
              required
            />
            <div
              onMouseEnter={() => setInputType(currentType => "text")}
              onMouseLeave={() => setInputType(currentType => "password")}>
              <FaRegEyeSlash style={{ "position": "absolute", "top": "37.5%", "right": "42%"}} />
            </div>
          </FlexDiv>
        </AlignStartWrapper>
          <GetStartedBtn
            style={{ margin: "auto", "margin-top": "36.6px" }}
            type="submit"
          >
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
