import React from "react";
import { DotDiv, Loader } from "../Dashboard/Dashboard.styles.jsx";
import profileQueries from "../../utils/ProfileQueries.js";
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

export default function Profile() {
  const userId = { userId: 1 };
  const [profileInfo, setProfileInfo] = React.useState("");
  const [readMore, setReadMore] = React.useState(false);

  React.useEffect(() => {
    profileQueries(userId, setProfileInfo);
  }, []);

  if (profileInfo.length === 0) {
    return (
      <>
        <Loader>
          <h3>Finding your connections</h3>
        </Loader>
        <DotDiv></DotDiv>
      </>
    );
  }

  console.log(profileInfo);
  return (
    <UserProfile>
      {
        Object.keys(profileInfo).map(function (key, index) {
          console.log(key);
          console.log(profileInfo.key);
          // return (key === "headerInfo"?
          return (
            <ProfileHeader>
              <Button>
                <BlueBackArrow size="37" />
              </Button>
              <ProfilePic size="97" />
              <Description>
                <Text>{profileInfo.key[0].full_name}</Text>
                <Text>{}</Text>
                <Text>{}</Text>
              </Description>
              <EditIcon size="27" />
            </ProfileHeader>
          );
        })
        // : key === "Medical_School"?

        // <ProfileHeader>
        //   <Button>
        //     <BlueBackArrow size="37" />
        //   </Button>
        //   <ProfilePic size="97" />
        //   <Description>
        // <Text>{}</Text>
        // <Text>{}</Text>
        // <Text>{}</Text>
        //   </Description>
        //   <EditIcon size="27" />
        // </ProfileHeader>
        // : key === ""

        // )
        // })

        /*
          //  Loop through the returned object
          // for each element :
              if its a header then assign it to the correct compos
            if not then assign each title to the section after replacing the underscore with a space

          */
      }
    </UserProfile>
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

{
  /* <select>
  {jobTitles.map((x) => {
    return <option>{x}</option>;
  })}
</select> */
}

// <ProfileHeader>
// <Button>
//   <BlueBackArrow size="37" />
// </Button>
// <ProfilePic size="97" />
// <Description>
//   <Text></Text>
// </Description>
// <EditIcon size="27" />
// </ProfileHeader>

// <ProfileBody>
// <UserInfo>
//   <Section>
//     <Subtitle>Medical school</Subtitle>
//     <Button onClick={() => setReadMore(!readMore)}>
//       <ReadMoreArrow size="32" readMore={readMore} />
//     </Button>
//   </Section>

//   <Text>lorem ipsum {readMore ? "hello" : "bye"}</Text>
//   <Text>lorem ipsum time time</Text>
//   {readMore && (
//     <>
//       <Text>lorem ipsum</Text>
//       <Text>lorem ipsum time time</Text>
//     </>
//   )}
// </UserInfo>
// </ProfileBody>
// </UserProfile>
