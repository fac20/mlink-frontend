import React from "react";
import { GetStartedBtn, Title, PageWrapper } from "../Onboarding/Onboarding.styles";
import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input, DropInput } from "./ProfileSetup.styles";
import queryHelpers from "../../utils/queryHelper";

function ProfileSetup() {
  const [jobTitles, setJobTitles] = React.useState([]);
  const [medical_schools, setMedicalSchools] = React.useState([]);
  const [specialities, setSpecialities] = React.useState([]);

  const dropdownIndicatorStyles = (base, state) => {
    let changes = {
      // all your override styles
      backgroundColor: "blue"
    };
    return Object.assign(base, changes);
  };
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

    const specialitiesQuery = `query MyQuery {
    specialities {
      speciality
    }
    }`;

    function extractspecialities(json) {
      setSpecialities(json.data.specialities);
    }

    queryHelpers(medicalSchoolsQuery, {}, extractMedicalSchools);

    queryHelpers(jobTitlesQuery, {}, extractJobTitles);

    queryHelpers(specialitiesQuery, {}, extractspecialities);

    // queryHelpers(jobTitlesQuery)
    // .then((json) => {
    //       console.log(json.data.job_titles);
    //       setJobTitles(json.data.job_titles);
    //     })
  }, []);

  return (
    <PageWrapper>
      <H1 style={{ color: "black" }}>Profile Setup</H1>
      <Form onSubmit="">
        <Labels htmlFor="title">Title</Labels>
        <DropInput id="title" name="title" required>
          <option value="Target db">Mr</option>
          <option value="Target db for miss">Miss</option>
          <option value="Target db for Mrs">Mrs</option>
          <option value="Target db for DR">Dr</option>
          <option value="Target db for Prof">Prof</option>
        </DropInput>
        <br />

        <Labels htmlFor="name">Full Name</Labels>
        <Input id="name" name="name" type="text" value="" required />
        <br />

        <Labels htmlFor="current_job">Current Job</Labels>
        <DropInput styles={{ dropdownIndicator: dropdownIndicatorStyles }} id="current_job" name="current_job" required>
          {jobTitles.map((x) => {
            return <option>{x.job_title}</option>;
          })}
        </DropInput>
        <br />

        <Labels htmlFor="school">Medical School</Labels>
        <DropInput id="school" name="school" required>
          {medical_schools.map((x) => {
            return <option> {x.medical_school}</option>;
          })}
        </DropInput>
        <br />

        <Labels htmlFor="specialty">Specialty</Labels>
        <DropInput id="specialty" name="specialty" required>
          {specialities.map((x) => {
            return <option> {x.speciality}</option>;
          })}
        </DropInput>
        <br />

        <GetStartedBtn style={{ width: "129px", height: "47px", margin: "auto" }} type="submit">
          Finish
        </GetStartedBtn>
      </Form>
    </PageWrapper>
  );
}

export default ProfileSetup;
