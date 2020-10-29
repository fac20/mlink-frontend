import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import errorImage from "../../assets/images/404 Error Large.svg";
import { GetStartedBtn } from "../Onboarding/Onboarding.styles";

const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5vw;
`;

const ButtonWrapper = styled.div`
  text-align: center;
  margin-top: 3vw;
`;

function PageNotFound() {
  return (
    <ErrorWrapper>
      <img alt="404" src={errorImage} height="300"></img>
      <ButtonWrapper>
        <Link to="/">
          <GetStartedBtn> Go back home</GetStartedBtn>
        </Link>
      </ButtonWrapper>
    </ErrorWrapper>
  );
}

export default PageNotFound;
