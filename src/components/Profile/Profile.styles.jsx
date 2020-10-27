import react from "react";
import styled from "styled-components";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline"
import { ArrowIosBackOutline } from "@styled-icons/evaicons-outline/ArrowIosBackOutline";
import { PersonOutline } from "@styled-icons/material-sharp/PersonOutline";
import { Pencil } from "@styled-icons/ionicons-sharp/Pencil";

export const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const BlueBackArrow = styled(ArrowIosBackOutline)`
  color: var(--main-blue);
  size: 5px;
`;


export const BackButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ProfileHeader = styled.section`
  padding: 1rem;

  position: relative;
  background-color: var(--light-blue);
  /* left: -3.73%;
  right: -4%;
  top: 0%;
  bottom: 74.66%; */
  height: 30vh;
  /* border-radius: 10px 100px / 120px; */
  border-radius: 0px 0px 10% 10%;
`;

export const ProfilePic = styled(PersonOutline)`
  color: var(--main-pink);
  position: absolute;
`;

export const Description = styled.section``;
export const Text = styled.p``;
export const EditIcon = styled(Pencil)`
  position: absolute;
  bottom: 5px;
  float: right;
`;

export const UserInfo = styled.section`

`;

/*
// section - light-blue 
- back button
- profile pic
- description
  - name
  - degrees
  - job title
  - speciality
- edit icon
*/

/*
ProfileBody
- UserInfo
- UserInfoDropdown
- Joined 
*/
/*
//dropdown
- onclick show more info
  - render component with the info

- change button display
- 
*/
