import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input } from "../Profile/ProfileSetup.styles";
import { FaRegEyeSlash } from "react-icons/fa";
import { FlexDiv, EyeDiv } from "./Registration.styles";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputType, setInputType] = useState("password");
  const history = useHistory();

  return (
    <PageWrapper>
      <H1 style={{ color: "black", "line-height": "30px" }}>Sign Up</H1>
      <Form
        onSubmit={() => {
          history.push("/setup");
        }}
      >
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

        <GetStartedBtn style={{ margin: "auto", "margin-top": "36.6px" }} type="submit">
          Sign up
        </GetStartedBtn>
      </Form>
    </PageWrapper>
  );
}
export default SignUpForm;
