// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

// const dotenv = require("dotenv");
// dotenv.config();

// console.log(process.env.REACT_APP_AUTHO_CLIENT_ID);
// ReactDOM.render(
//   <Auth0Provider
//     domain={process.env.REACT_APP_AUTHO_DOMAIN}
//     clientId={process.env.REACT_APP_AUTHO_CLIENT_ID}
//     audience="https://dev-t2n4419c.eu.auth0.com/api/v2/"
//     scope="read:current_user update:current_user_metadata"
//     //redirect user after authentication
//     redirectUri={"http://localhost:3000/setup"}
//   >
//     <App />,
//   </Auth0Provider>,
//   document.getElementById("root")
// );

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain="dev-t2n4419c.eu.auth0.com"
    clientId="E0ifO9k3QWne73Yqsv1Bq6pBoCjd1rnV"
    redirectUri={"http://localhost:3000/profile"}
    audience="https://dev-t2n4419c.eu.auth0.com/api/v2/"
    scope="read:current_user update:current_user_metadata"
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
