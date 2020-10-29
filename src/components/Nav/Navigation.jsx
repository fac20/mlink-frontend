import React from "react";
import { Link } from "react-router-dom";
import { FlexDiv } from "../Network/Network.styles.jsx";

import { Nav, NavigationButtons } from "./Nav.styles.jsx";

export default function Navigation() {
  console.log("hey", window.location.pathname);
  const pathname = window.location.pathname;

  return (
    <Nav>
      <FlexDiv alignItems="center">
        <Link to="/dashboard">
          <NavigationButtons currentPage={pathname} buttonName={"/dashboard"}>
            Dashboard
          </NavigationButtons>
        </Link>
      </FlexDiv>
      <FlexDiv alignItems="center">
        <Link to="/network">
          <NavigationButtons currentPage={pathname} buttonName={"/network"}>
            Network
          </NavigationButtons>
        </Link>
      </FlexDiv>
    </Nav>
  );
}
