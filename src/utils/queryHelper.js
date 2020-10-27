export default (query, variables, tableName, objectKeyName, setStateFunction) => {
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
      console.log(json);
      let dataArray = json.data[tableName];
      console.log(dataArray);
      dataArray.sort((a, b) => a[objectKeyName].localeCompare(b[objectKeyName]));
      return setStateFunction(dataArray);
    })
    .catch((error) => {
      console.error(error);
    });
};
