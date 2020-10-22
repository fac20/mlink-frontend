// Search by:
// name (profile)
// return all profiles which contain the inputted string in their name
// specialty
// medical school

const userSearchQuery = `
query SearchByName($user_input: String!){
    {
        users {
            full_name(
                where: { full_name: {_ilike: "%$user_input%"}})
        }
    }
}`;

export default (user_input) => {
  const url = "https://tfb-mlink.herokuapp.com/v1/graphql";
  const options = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      "x-hasura-admin-secret": "secretKey",
      variables: { user_input }
    },
    body: JSON.stringify({ userSearchQuery, user_input })
  };

  fetch(url, options)
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    })
    .then(console.log)
    .catch(console.error);
};
