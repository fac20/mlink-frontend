import React from "react";
import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input } from "../Profile/ProfileSetup.styles";

function SignUpForm() {
  return (
    <PageWrapper>
      <H1 style={{ color: "black", "line-height": "30px" }}>Sign Up</H1>

      <Form>
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
        <Input
          name="password"
          id="password"
          type=""
          value=""
          onChange=""
          required
        />

        <GetStartedBtn
          style={{ margin: "auto", "margin-top": "36.6px" }}
          type="submit"
        >
          Login
        </GetStartedBtn>
      </Form>
    </PageWrapper>
  );
}
export default SignUpForm;
