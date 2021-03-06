import React from "react";
import { Link } from "react-router-dom";

import { FlexDiv } from "../Network/Network.styles.jsx";
import { Nav, NavigationButtons } from "./Navigation.styles.jsx";

export default function Navigation() {
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
