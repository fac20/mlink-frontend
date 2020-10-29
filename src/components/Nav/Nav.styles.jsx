import styled from "styled-components";
import { GetStartedBtn } from "../Onboarding/Onboarding.styles.jsx";

// background-color: ${(props) =>
//     props.currentPage === props.buttonName ? "var(--main-pink)" : !props.currentPage ? "var(--main-pink)" : "white"};
// //
export const Nav = styled.nav`
  display: flex;
  /* flex-direction: row;*/
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
