import React from "react";
import { GetStartedBtn, Title, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input, DropInput } from "./ProfileSetup.styles";
import queryHelpers from "../../utils/queryHelper";

function ProfileSetup() {
  const [jobTitles, setJobTitles] = React.useState([]);
  const [medical_schools, setMedicalSchools] = React.useState([]);
  const [specialities, setSpecialities] = React.useState([]);
  const [titles, setTitles] = React.useState([]);

  const [jobTitleInput, setJobTitleInput] = React.useState("");
  const [specialityInput, setSpecialityInput] = React.useState("");
  const [medicalSchoolInput, setMedicalSchoolInput] = React.useState("");
  const [titleInput, setTitleInput] = React.useState("");

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
        id
      }
    }`;

    const medicalSchoolsQuery = `query allMedicalSchools {
      medical_schools {
        medical_school
        id
      }
      }`;

    const specialitiesQuery = `query MyQuery {
      specialities {
        speciality
        id
      }
      }`;

    const titlesQuery = `query MyQuery {
        titles_list {
          id
          title
        }
      }`;

    //function that gets specifically what we want and updating the state of jobTitles
    // // function extractJobTitles(json) {
    // //   let jobtitlesarray = json.data.job_titles;
    // //   jobtitlesarray.sort((a, b) => a.job_title.localeCompare(b.job_title));
    // //   setJobTitles(jobtitlesarray);
    // // }

    queryHelpers(medicalSchoolsQuery, {}, "medical_schools", "medical_school", setMedicalSchools);

    queryHelpers(jobTitlesQuery, {}, "job_titles", "job_title", setJobTitles);

    queryHelpers(specialitiesQuery, {}, "specialities", "speciality", setSpecialities);

    queryHelpers(titlesQuery, {}, "titles_list", "title", setTitles);
  }, []);

  return (
    <PageWrapper>
      <H1 style={{ color: "black" }}>Profile Setup</H1>
      <Form onSubmit="">
        <Labels htmlFor="title">Title</Labels>
        <DropInput
          onChange={(e) => {
            setTitleInput(e.target.value);
            console.log(titleInput);
          }}
          id="title"
          name="title"
          required
        >
          {titles.map((x) => {
            return <option value={x.id}>{x.title}</option>;
          })}
        </DropInput>
        <br />

        <Labels htmlFor="name">Full Name</Labels>
        <Input id="name" name="name" type="text" value="" required />
        <br />

        <Labels htmlFor="current_job">Current Job</Labels>
        <DropInput
          onChange={(e) => {
            setJobTitleInput(e.target.value);
          }}
          styles={{ dropdownIndicator: dropdownIndicatorStyles }}
          id="current_job"
          name="current_job"
          required
        >
          {jobTitles.map((x) => {
            return <option value={x.id}>{x.job_title}</option>;
          })}
        </DropInput>
        <br />

        <Labels htmlFor="school">Medical School</Labels>
        <DropInput
          onChange={(e) => {
            setMedicalSchoolInput(e.target.value);
            console.log(medicalSchoolInput);
          }}
          id="school"
          name="school"
          required
        >
          {medical_schools.map((x) => {
            return <option value={x.id}> {x.medical_school}</option>;
          })}
        </DropInput>
        <br />

        <Labels htmlFor="specialty">Specialty</Labels>
        <DropInput
          onChange={(e) => {
            setSpecialityInput(e.target.value);
            console.log(specialityInput);
          }}
          id="specialty"
          name="specialty"
          required
        >
          {specialities.map((x) => {
            return <option value={x.id}> {x.speciality}</option>;
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
