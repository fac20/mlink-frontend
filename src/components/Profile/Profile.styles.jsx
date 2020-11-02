import styled from "styled-components";
import { ArrowBackIos } from "@styled-icons/material-twotone/ArrowBackIos";
// import { avatar as ProfilePic } from "../../assets/images/avatar.svg";
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
  cursor: pointer;
`;

export const ProfileHeader = styled.div`
  background-color: var(--light-blue);
  border-radius: 0px 0px 10% 10%;
  height: 30vh;
  padding: 1rem;
  position: relative;
`;

export const AvatarDiv = styled.div`

`;

export const Img = styled.img`
  /* margin-left: 120px;
  margin-top: 100px; */
  position: absolute;
  top: 120px;
  width: 117px;
  @media (max-width: 500px) {
    float: left;
    
   }
`; 

export const DescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
  right: 17rem;
  @media (max-width: 500px) {
    top: 1rem;
    right: 2rem;
   }
`;


export const Text = styled.span`
  text-align: right;
`;

export const EditDiv = styled.div`
`;

export const EditIcon = styled(Pencil)`
  bottom: 2rem;
  position: absolute;
  right: 1rem;
`;