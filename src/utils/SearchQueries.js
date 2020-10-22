// Search by:
// name (profile)
// return all profiles which contain the inputted string in their name
// specialty
// medical school
export default (input) => {
  const variables = { input: input };
  const query = `
    query SearchByName($input: String!) {
      users(where: {full_name: {_ilike: $input}}) {
        bio
        email
      }
    }`;

  fetch("https://tfb-mlink.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "secretKey"
    },
    body: JSON.stringify({ query, variables })
  })
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    })
    .then((json) => {
      console.log(json);
    })
    .catch((error) => {
      console.error(error);
    });
};
