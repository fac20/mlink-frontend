import React from "react";
import { jobTitleQuery } from "./../../utils/ProfileQueries";
import {
  GetStartedBtn,
  Title,
  PageWrapper
} from "../Onboarding/Onboarding.styles";

function ProfileSetup() {
  React.useEffect(() => {
    const jobTitlesQuery = `query MyQuery {
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
      body: JSON.stringify({ query: jobTitlesQuery })
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
  }, []);

  return (
    <PageWrapper>
      <Title style={{ color: "black" }}>Profile Setup</Title>
      <form onSubmit="">
        {/* We need to target db for the drop down menu, will come back to this */}
        <label htmlFor="title">Title</label>
        <select id="title" name="title" required>
          <option value="Target db">Mr</option>
          <option value="Target db for miss">Miss</option>
          <option value="Target db for Mrs">Mrs</option>
          <option value="Target db for DR">Dr</option>
          <option value="Target db for Prof">Prof</option>
        </select>

        <label htmlFor="name">Full Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Type your name"
          value=""
          required
        />

        <label htmlFor="current_job">Current job title</label>
        <select id="current_job" name="current_job" required>
          <option value="Target db for job">Dolphin Trainer</option>
        </select>

        <label htmlFor="school">Medical School</label>

        <label htmlFor="specialty">Specialty</label>

        <GetStartedBtn type="submit">Finish</GetStartedBtn>
      </form>
    </PageWrapper>
  );
}

export default ProfileSetup;
