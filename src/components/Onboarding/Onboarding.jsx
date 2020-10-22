import React from "react";

import {
  GetStartedBtn,
  Title,
  Subtitle,
  Text,
  Image,
  PageWrapper
} from "./Onboarding.styles";
import landingHero from "./../../assets/images/landingHero.svg";

function Onboarding() {
  return (
    <PageWrapper>
      <Title>MLink</Title>
      <Subtitle>
        Networking for Healthcare <br />
        Professionals
      </Subtitle>
      <Image alt="onboarding" src={landingHero} />
      <Text>
        Connect, learn and grow with other <br />
        like-minded professionals
      </Text>
      <GetStartedBtn>Get started</GetStartedBtn>
    </PageWrapper>
  );
}

export default Onboarding;
