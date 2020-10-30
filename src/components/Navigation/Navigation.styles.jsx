import styled from "styled-components";

import { GetStartedBtn } from "../Onboarding/Onboarding.styles.jsx";

export const Nav = styled.nav`
  display: flex;
  align-self: center;
  position: fixed;
  bottom: 10px;
  max-width: 100%;
`;

export const NavigationButtons = styled(GetStartedBtn)`
  box-shadow: ${(props) =>
    props.currentPage === props.buttonName
      ? "0 15px 10px -10px rgba(94, 14, 14, 0.5)"
      : !props.currentPage
      ? ""
      : "0 15px 10px -10px rgba(94, 14, 14, 0.5)"};

  border: ${(props) => (props.currentPage === props.buttonName ? "" : !props.currentPage ? "" : "1px solid #E3E3E3")};

  &:active {
    box-shadow: 1px 4px 5px 1px rgba(0, 0, 0, 0.1);
    transition-duration: 10ms;
    position: relative;
    top: 3px;
    left: 3px;
  }
  @media (max-width: 505px) {
    font-size: 16px;
    font-size: bold;
    width: 180px;
  }
  @media (max-width: 330px) {
    font-size: 16px;
    font-size: bold;
    width: 130px;
  }
`;
