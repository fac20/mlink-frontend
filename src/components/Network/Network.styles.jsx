import styled from "styled-components";
import { Text } from "../Profile/Profile.styles.jsx";
import { Img, AvatarDiv } from "../Profile/Profile.styles.jsx";

export const RequestImg = styled.img`
  margin-left: 20px;
  margin-top: 20px;
  width: 40px;
`;

export const ProfileImg = styled.img`
  float: right;
  margin-top: 20px;
  margin-right: 20px;
  width: 40px;
`;

export const NetworkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchWrapper = styled.span``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInput = styled.input`
  background: #e8e8ed;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 18px;
  border: none;
  height: 40px;
  width: 296px;
  text-align-last: center;
  /* margin-top: 100px; */
  @media (max-width: 320px) {
    width: 200px;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
`;

export const Card = styled.section`
  padding: 20px;
  border-radius: 3px;
  background-color: white;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: row;
  margin-top: 2rem;
  width: 70%;
`;

export const UserInfoText = styled(Text)`
  animation: animatop 0.9s cubic-bezier(0.425, 1.14, 0.47, 1.125) forwards;
`;
export const UserName = styled.h3`
  font-family: var(--main-font);
`;

export const ProfileAvatar = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const ProfileImageDiv = styled(AvatarDiv)`
  width: 2rem;
  height: 2rem;
`;

export const TextWrapper = styled(NetworkWrapper)`
  margin-left: 2rem;
`;
