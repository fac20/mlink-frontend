import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

const dotenv = require("dotenv");
dotenv.config();

console.log(process.env.REACT_APP_AUTHO_CLIENT_ID);
ReactDOM.render(
  <Auth0Provider
    domain={process.env.REACT_APP_AUTHO_DOMAIN}
    clientId={process.env.REACT_APP_AUTHO_CLIENT_ID}
    //redirect user after authentication
    redirectUri={"http://localhost:3000/setup"}
  >
    <App />,
  </Auth0Provider>,
  document.getElementById("root")
);
