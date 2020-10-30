export default (query, variables, tableName, objectKeyName, setStateFunction) => {
  fetch("https://mlink-app.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": process.env.REACT_APP_HASURA_SECRET_KEY
    },
    body: JSON.stringify({ query: query, variables: variables })
  })
    .then((response) => {
      if (!response.ok) throw new Error("Request failed");
      return response.json();
    })
    .then((json) => {
      let dataArray = json.data;
      if (tableName !== "" && objectKeyName !== "") {
        dataArray = dataArray[tableName];
        dataArray.sort((a, b) => a[objectKeyName].localeCompare(b[objectKeyName]));
      }
      if (setStateFunction !== "") return setStateFunction(dataArray);
      console.log(dataArray);
    })
    .catch((error) => {
      console.error(error);
    });
};
