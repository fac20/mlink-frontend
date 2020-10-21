import { https } from "firebase-functions";

import { initializeApp, credential as _credential, auth } from "firebase-admin";
import serviceAccount from "./config.json";

export const hasuraWebhook = https.onRequest((request, response) => {
  var error = null;

  if (serviceAccount) {
    try {
      initializeApp({
        credential: _credential.cert(serviceAccount),
      });
    } catch (e) {
      // eslint-disable-next-line no-unused-vars
      error = e;
    }
  }

  var authHeaders = request.get("Authorization");
  // Send anonymous role if there are no auth headers
  if (!authHeaders) {
    response.json({ "x-hasura-role": "anonymous" });
    return;
  } else {
    // Validate the received id_tokenolp;
    var idToken = extractToken(authHeaders);
    console.log(idToken);
    auth()
      .verifyIdToken(idToken)
      .then((decodedToken) => {
        console.log("decodedToken", decodedToken);
        var hasuraVariables = {
          "X-Hasura-User-Id": decodedToken.uid,
          "X-Hasura-Role": "user",
        };
        console.log(hasuraVariables); // For debug
        // Send appropriate variables
        response.json(hasuraVariables);
        return;
      })
      .catch((e) => {
        // Throw authentication error
        console.log(e);
        response.json({ "x-hasura-role": "anonymous" });
      });
  }
});

const extractToken = (bearerToken) => {
  const regex = /^(Bearer) (.*)$/g;
  const match = regex.exec(bearerToken);
  if (match && match[2]) {
    return match[2];
  }
  return null;
};
