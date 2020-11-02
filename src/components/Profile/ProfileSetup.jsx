import React from "react";

import { GetStartedBtn, PageWrapper } from "../Onboarding/Onboarding.styles";
import { Form, H1, Labels, Input, DropInput } from "./ProfileSetup.styles";
import queryHelpers from "../../utils/queryHelper";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router-dom";

function ProfileSetup() {
  const [jobTitles, setJobTitles] = React.useState([]);
  const [medical_schools, setMedicalSchools] = React.useState([]);
  const [specialities, setSpecialities] = React.useState([]);
  const [titles, setTitles] = React.useState([]);
  const [jobTitleInput, setJobTitleInput] = React.useState("");
  const [specialityInput, setSpecialityInput] = React.useState("");
  const [medicalSchoolInput, setMedicalSchoolInput] = React.useState("");
  const [titleInput, setTitleInput] = React.useState("");
  const [nameInput, setNameInput] = React.useState("");
  const history = useHistory();

  const { user, getIdTokenClaims, getAccessTokenSilently } = useAuth0();

  React.useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-t2n4419c.eu.auth0.com";

      try {
        // const accessToken = await getAccessTokenSilently({
        //   audience: `https://${domain}/api/v2/`,
        //   scope: "read:current_user"
        // });

        const claims = await getIdTokenClaims();
        const id_token = claims.__raw;
        console.log("idtoken");
        localStorage.setItem("id_token", id_token);

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;
        console.log("details in url", userDetailsByIdUrl);
      } catch (e) {
        console.log(e.message);
      }
    };
    getUserMetadata();

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
    queryHelpers(medicalSchoolsQuery, {}, "medical_schools", "medical_school", setMedicalSchools);
    queryHelpers(jobTitlesQuery, {}, "job_titles", "job_title", setJobTitles);
    queryHelpers(specialitiesQuery, {}, "specialities", "speciality", setSpecialities);
    queryHelpers(titlesQuery, {}, "titles_list", "title", setTitles);
  }, [user]);

  return (
    <PageWrapper>
      <H1 style={{ color: "black" }}>Profile Setup</H1>
      <Form
        onSubmit={() => {
          history.push("/dashboard");
        }}
      >
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
        <Input
          id="name"
          name="name"
          type="text"
          value={nameInput}
          onChange={(event) => {
            console.log("hi");
            console.log(event.target.value);
            setNameInput(event.target.value);
          }}
          required
        />
        <br />
        <Labels htmlFor="current_job">Current Job</Labels>
        <DropInput
          onChange={(e) => {
            setJobTitleInput(e.target.value);
          }}
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
