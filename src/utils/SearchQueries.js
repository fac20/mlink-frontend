export function queryGraphql(query, variables) {
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
}
// Search by:
// name (profile)
// return all profiles which contain the inputted string in their name
// specialty
// medical school

// Imported as query to App.js
export function searchByName(input) {
  input = `%${input}%`;
  const variables = { input: input };
  const query = `
    query SearchByName($input: String!) {
      users(where: {full_name: {_ilike: $input}}) {
        bio
        email
      }
    }`;
  queryGraphql(query, variables);
}

// export function viewProfile(input) {

//     queryGraphql(query, variables)
// };
