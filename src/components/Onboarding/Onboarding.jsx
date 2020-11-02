import React from "react";
import { Link } from "react-router-dom";

import { Logo, OnboardingTitle, Subtitle, Text, Image, PageWrapper } from "./Onboarding.styles";
import landingHero from "./../../assets/images/landingHero.svg";
import logo from "../../assets/images/logo2.png";
import Auth0LoginButton from "../Registration/Auth0Login";

function Onboarding() {
  return (
    <PageWrapper>
      <Logo src={logo} alt="mlink logo" />
      <OnboardingTitle>MLink</OnboardingTitle>
      <Subtitle>
        Networking for Healthcare <br />
        Professionals
      </Subtitle>
      <Image alt="onboarding" src={landingHero} />
      <Text>
        Connect, learn and grow with other <br />
        like-minded professionals
      </Text>
      <Auth0LoginButton></Auth0LoginButton>
    </PageWrapper>
  );
}

export default Onboarding;
