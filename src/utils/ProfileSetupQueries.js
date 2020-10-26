// Dropdown query
// job titles)
// return all job titles
// map through all job titles
// display in a dropdown select option format

export function jobTitleQuery() {
  const jobTitleQuery = `query MyQuery {
    job_titles {
      job_title
    }
  }`;

  fetch("https://tfb-mlink.herokuapp.com/v1/graphql", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-hasura-admin-secret": "secretKey"
    },
    body: JSON.stringify({ jobTitleQuery })
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
