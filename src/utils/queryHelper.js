export default (query, variables, sortResponse) => {
  fetch("https://tfb-mlink.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "secretKey"
    },
    body: JSON.stringify({ query: query, variables: variables })
  })
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    })
    .then((json) => {
      return sortResponse(json);
    })
    .catch((error) => {
      console.error(error);
    });
};
