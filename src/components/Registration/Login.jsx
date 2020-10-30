import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input } from "../Profile/ProfileSetup.styles";
import { RegisterText, TextDiv, RegisterButton, FlexDiv, AlignStartWrapper, EyeDiv } from "./Registration.styles";
import { FaRegEyeSlash } from "react-icons/fa";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const history = useHistory();

  return (
    <PageWrapper>
      <H1 style={{ color: "black", "line-height": "30px" }}>Login</H1>
      <Form
        onSubmit={() => {
          history.push("/dashboard");
        }}
      >
        <AlignStartWrapper>
          <Labels htmlFor="email">Email</Labels>
          <Input
            name="email"
            id="email"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            required
          />
          <br />
          <Labels>Password</Labels>
          <FlexDiv>
            <Input
              name="password"
              id="password"
              type={inputType}
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
              required
            />
            <div
              onMouseEnter={() => setInputType((currentType) => "text")}
              onMouseLeave={() => setInputType((currentType) => "password")}
            >
              <EyeDiv>
                <FaRegEyeSlash />
              </EyeDiv>
            </div>
          </FlexDiv>
        </AlignStartWrapper>
        <GetStartedBtn style={{ margin: "auto", "margin-top": "36.6px" }} type="submit">
          Login
        </GetStartedBtn>

        <TextDiv>
          <RegisterText>Don’t have an account? </RegisterText>
          <RegisterButton>
            <Link to="/signup" style={{ "text-decoration": "none", color: "black" }}>
              Register
            </Link>
          </RegisterButton>
        </TextDiv>
      </Form>
    </PageWrapper>
  );
}

export default LoginForm;
