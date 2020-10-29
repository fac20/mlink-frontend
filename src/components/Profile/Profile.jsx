import React from "react";
// import { queryGraphql } from "../../utils/SearchQueries.js";
import {
  UserProfile,
  Button,
  BlueBackArrow,
  ProfileHeader,
  ProfilePic,
  Description,
  Text,
  EditIcon,
  ReadMoreArrow,
  Subtitle,
  ProfileBody,
  UserInfo,
  Section
} from "./Profile.styles";

// current job
// previous job
// medical school
// postgrad exams

export default function Profile() {
  const [readMore, setReadMore] = React.useState(false);
  // create a button
  // when the button is clicked then it sets readmore to true
  // when readmore is true
  // then more info shows up and vise versa

  return (
    <>
      <UserProfile>
        <ProfileHeader>
          <Button>
            <BlueBackArrow size="37" />
          </Button>
          <ProfilePic size="97" />
          <Description>
            <Text></Text>
          </Description>
          <EditIcon size="27" />
        </ProfileHeader>

        <ProfileBody>
          <UserInfo>
            <Section>
              <Subtitle>Medical school</Subtitle>
              <Button onClick={() => setReadMore(!readMore)}>
                <ReadMoreArrow size="32" readMore={readMore} />
              </Button>
            </Section>

            <Text>lorem ipsum {readMore ? "hello" : "bye"}</Text>
            <Text>lorem ipsum time time</Text>
            {readMore && (
              <>
                <Text>lorem ipsum</Text>
                <Text>lorem ipsum time time</Text>
              </>
            )}
          </UserInfo>
        </ProfileBody>
      </UserProfile>

      {/* <select>
        {jobTitles.map((x) => {
          return <option>{x}</option>;
        })}
      </select> */}
    </>
  );
}

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
