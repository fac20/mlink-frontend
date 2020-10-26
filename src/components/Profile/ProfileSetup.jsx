import React from "react";
import { Title } from "./ProfileSetup.styles";
import { jobTitleQuery } from "./../../utils/ProfileQueries";

function ProfileSetup() {
  React.useEffect(() => {
    const result = jobTitleQuery();
    console.log(result);
  });

  // {
  //     "data": {
  //       "job_titles": [
  //         {
  //           "job_title": "FY 1"
  //         },
  //         {
  //           "job_title": "FY 2"
  //         },
  //         {
  //           "job_title": "IMT 1"
  //         },
  //         {
  //           "job_title": "IMT 2"
  //         },
  //         {
  //           "job_title": "IMT 3"
  //         },
  //         {
  //           "job_title": "CT 1"
  //         },
  //         {
  //           "job_title": "CT 2"
  //         },
  //         {
  //           "job_title": "SHO"
  //         },
  //         {
  //           "job_title": "ST 1"
  //         },
  //         {
  //           "job_title": "ST 2"
  //         },
  //         {
  //           "job_title": "ST 3"
  //         },
  //         {
  //           "job_title": "ST 4"
  //         },
  //         {
  //           "job_title": "ST 5"
  //         },
  //         {
  //           "job_title": "ST 6"
  //         },
  //         {
  //           "job_title": "ST 7"
  //         },
  //         {
  //           "job_title": "ST 8"
  //         },
  //         {
  //           "job_title": "Consultant"
  //         },
  //         {
  //           "job_title": "Clinical Fellow"
  //         },
  //         {
  //           "job_title": "Research Fellow"
  //         },
  //         {
  //           "job_title": "SAS Doctor"
  //         },
  //         {
  //           "job_title": "Locum Appointment"
  //         },
  //         {
  //           "job_title": "FY 3"
  //         },
  //         {
  //           "job_title": "FY 4"
  //         },
  //         {
  //           "job_title": "FY 5"
  //         },
  //         {
  //           "job_title": "CT 3"
  //         },
  //         {
  //           "job_title": "Out-of-training Doctor"
  //         },
  //         {
  //           "job_title": "Non-clinical Doctor"
  //         },
  //         {
  //           "job_title": "NOTENTERED YET"
  //         }
  //       ]
  //     }
  //   }

  return (
    <>
      <Title>Profile Setup</Title>
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

        <button type="submit">Finish</button>
      </form>
    </>
  );
}

export default ProfileSetup;
