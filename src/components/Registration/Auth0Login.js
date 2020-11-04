import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { GetStartedBtn } from "./../Onboarding/Onboarding.styles";

const Auth0LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <GetStartedBtn onClick={() => loginWithRedirect()}>Get started</GetStartedBtn>;
};

export default Auth0LoginButton;
