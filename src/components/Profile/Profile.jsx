import React from "react";
import { queryGraphql } from "../../utils/SearchQueries.js";
import {
  UserProfile,
  BackButton,
  BlueBackArrow,
  ProfileHeader,
  ProfilePic,
  Description,
  Text,
  EditIcon
} from "./Profile.styles";

export default function Profile() {
  // const [jobTitles, setJobTitles] = React.useState("");

  // React.useEffect(() => {
  //   const query = `query GetUser {
  //       users(where: {full_name: {_eq: "Jane Doe"}}) {
  //         id
  //         bio
  //         current_job_speciality
  //         current_job_start
  //         current_job_title
  //         current_job_workplace
  //         current_location
  //         degree_end
  //         degree_start
  //         degree_title
  //         email
  //         full_name
  //         gmc_number
  //         medical_school
  //         open_to_collaboration
  //         open_to_giving_advice
  //         phone_number
  //         titles_list {
  //           title
  //         }
  //       }
  //     }`;

  //   queryGraphql(query).then((result) => console.log(result.data.users));
  // }, []);
  return (
    <>
      <UserProfile>
        <ProfileHeader>
          <BackButton>
            <BlueBackArrow size="37" />
          </BackButton>
          <ProfilePic size="97" />
          <Description>
            <Text></Text>
          </Description>
          <EditIcon size="27" />
        </ProfileHeader>
      </UserProfile>

      {/* <select>
        {jobTitles.map((x) => {
          return <option>{x}</option>;
        })}
      </select> */}
    </>
  );
}
