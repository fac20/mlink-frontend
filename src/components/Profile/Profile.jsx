import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [userMetadata, setUserMetadata] = React.useState(null);

  React.useEffect(() => {
    const getUserMetadata = async () => {
      const domain = "dev-t2n4419c.eu.auth0.com";

      try {
        const accessToken = await getAccessTokenSilently({
          audience: `https://${domain}/api/v2/`,
          scope: "read:current_user"
        });

        console.log(accessToken);

        const userDetailsByIdUrl = `https://${domain}/api/v2/users/${user.sub}`;

        const metadataResponse = await fetch(userDetailsByIdUrl, {
          headers: {
            Authorization: `Bearer ${accessToken}`
          }
        });

        const { user_metadata } = await metadataResponse.json();

        setUserMetadata(user_metadata);
      } catch (e) {
        console.log(e.message);
      }
    };

    getUserMetadata();
  }, []);

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.accessToken} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        {userMetadata ? <pre>{JSON.stringify(userMetadata, null, 2)}</pre> : "No user metadata defined"}
      </div>
    )
  );
};

export default Profile;

// import React from "react";
// import { queryGraphql } from "../../utils/SearchQueries.js";
// import {
//   UserProfile,
//   Button,
//   BlueBackArrow,
//   ProfileHeader,
//   ProfilePic,
//   Description,
//   Text,
//   EditIcon,
//   ReadMoreArrow,
//   Subtitle,
//   ProfileBody,
//   UserInfo,
//   Section
// } from "./Profile.styles";

// // current job
// // previous job
// // medical school
// // postgr

// export default function Profile() {
//   const [readMore, setReadMore] = React.useState(false);
//   // create a button
//   // when the button is clicked then it sets readmore to true
//   // when readmore is true
//   // then more info shows up and vise versa

//   return (
//     <>
//       <UserProfile>
//         <ProfileHeader>
//           <Button>
//             <BlueBackArrow size="37" />
//           </Button>
//           <ProfilePic size="97" />
//           <Description>
//             <Text></Text>
//           </Description>
//           <EditIcon size="27" />
//         </ProfileHeader>

//         <ProfileBody>
//           <UserInfo>
//             <Section>
//               <Subtitle>Medical school</Subtitle>
//               <Button onClick={() => setReadMore(!readMore)}>
//                 <ReadMoreArrow size="32" readMore={readMore} />
//               </Button>
//             </Section>

//             <Text>lorem ipsum {readMore ? "hello" : "bye"}</Text>
//             <Text>lorem ipsum time time</Text>
//             {readMore && (
//               <>
//                 <Text>lorem ipsum</Text>
//                 <Text>lorem ipsum time time</Text>
//               </>
//             )}
//           </UserInfo>
//         </ProfileBody>
//       </UserProfile>

//       {/* <select>
//         {jobTitles.map((x) => {
//           return <option>{x}</option>;
//         })}
//       </select> */}
//     </>
//   );
// }

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
