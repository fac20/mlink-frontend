import styled from "styled-components";
import { ArrowBackIos } from "@styled-icons/material-twotone/ArrowBackIos";
import { PersonOutline } from "@styled-icons/material-sharp/PersonOutline";
import { Pencil } from "@styled-icons/ionicons-sharp/Pencil";
import { ArrowDropDown } from "@styled-icons/material-rounded/ArrowDropDown";

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const ProfileBody = styled.section`
  display: flex;
  flex-direction: column;
  margin: 3rem 20%;
`;
export const UserInfo = styled.article``;
export const Subtitle = styled.h4``;

export const UserProfile = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
`;
export const BlueBackArrow = styled(ArrowBackIos)`
  color: var(--main-blue);
  size: 5px;
`;
export const ReadMoreArrow = styled(ArrowDropDown)`
  transform: ${(props) => (props.readMore ? "scaleY(-1)" : "")};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
`;

export const ProfileHeader = styled.section`
  background-color: var(--light-blue);
  border-radius: 0px 0px 10% 10%;
  height: 30vh;
  padding: 1rem;
  position: relative;
`;

export const ProfilePic = styled(PersonOutline)`
  bottom: 0.5rem;
  color: var(--main-pink);
  position: absolute;
`;

export const Description = styled.section``;
export const Text = styled.p``;

export const EditIcon = styled(Pencil)`
  bottom: 2rem;
  position: absolute;
  right: 1rem;
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
