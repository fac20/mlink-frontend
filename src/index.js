import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import "./index.css";

ReactDOM.render(
  <Auth0Provider
    domain="dev-t2n4419c.eu.auth0.com"
    clientId="E0ifO9k3QWne73Yqsv1Bq6pBoCjd1rnV"
    //redirect user after authentication
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
