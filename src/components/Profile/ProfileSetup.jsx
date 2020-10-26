import React from "react";
import { GetStartedBtn, Title, PageWrapper } from "../Onboarding/Onboarding.styles";
import queryHelpers from "../../utils/queryHelper";

function ProfileSetup() {
  const [jobTitles, setJobTitles] = React.useState([]);
  const [medical_schools, setMedicalSchools] = React.useState([]);

  React.useEffect(() => {
    //query to get the jobtitles back (found through the hasura console)
    const jobTitlesQuery = `query MyQuery {
      job_titles {
        job_title
      }
    }`;

    //function that gets specifically what we want and updating the state of jobTitles
    function extractJobTitles(json) {
      setJobTitles(json.data.job_titles);
    }

    const medicalSchoolsQuery = `query allMedicalSchools {
    medical_schools {
      medical_school
    }
    }`;

    function extractMedicalSchools(json) {
      setMedicalSchools(json.data.medical_schools);
    }

    const result = queryHelpers(medicalSchoolsQuery, {}, extractMedicalSchools);

    queryHelpers(jobTitlesQuery, {}, extractJobTitles);

    // queryHelpers(jobTitlesQuery)
    // .then((json) => {
    //       console.log(json.data.job_titles);
    //       setJobTitles(json.data.job_titles);
    //     })
  }, []);

  return (
    <PageWrapper>
      <Title style={{ color: "black" }}>Profile Setup</Title>
      <form onSubmit="">
        <label htmlFor="title">Title</label>
        <br />
        <select id="title" name="title" required>
          <option value="Target db">Mr</option>
          <option value="Target db for miss">Miss</option>
          <option value="Target db for Mrs">Mrs</option>
          <option value="Target db for DR">Dr</option>
          <option value="Target db for Prof">Prof</option>
        </select>
        <br />

        <label htmlFor="name">Full Name</label>
        <br />
        <input id="name" name="name" type="text" placeholder="Type your name" value="" required />
        <br />

        <label htmlFor="current_job">Current job title</label>
        <br />
        <br />
        <select id="current_job" name="current_job" required>
          {jobTitles.map((x) => {
            return <option>{x.job_title}</option>;
          })}
        </select>

        <label htmlFor="school">Medical School</label>
        <br />
        <select id="school" name="school" required>
          {medical_schools.map((x) => {
            return <option> {x.medical_school}</option>;
          })}
        </select>
        <br />

        <label htmlFor="specialty">Specialty</label>
        <br />
        <select id="specialty" name="specialty" required></select>
        <br />

        <GetStartedBtn type="submit">Finish</GetStartedBtn>
      </form>
    </PageWrapper>
  );
}

export default ProfileSetup;
