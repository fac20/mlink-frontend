import React from "react";
import { Link } from "react-router-dom";
import profileIcon from "../../assets/images/profileicon.svg";
import requestIcon from "../../assets/images/requesticon.svg";
import Navigation from "../Navigation/Navigation.jsx";
import { DotDiv, Loader } from "../Dashboard/Dashboard.styles.jsx";

import {
  SearchInput,
  Form,
  SearchWrapper,
  NetworkWrapper,
  ProfileImg,
  ProfileAvatar,
  ProfileImageDiv,
  RequestImg,
  Card,
  UserInfoText,
  TextWrapper,
  UserName
} from "./Network.styles";
import avatar from "../../assets/images/avatar.svg";
import queryHelper from "../../utils/queryHelper";

function NetworkPage() {
  const [networkData, setNetworkData] = React.useState([]);

  React.useEffect(() => {
    const networkQuery = `
        query MyQuery {
            users {
              full_name
              speciality {
                speciality
              }
              workplace {
                workplace
              }
            }
          }
        `;
    queryHelper(networkQuery, {}, "", "", setNetworkData);
  }, []);
  if (!networkData) {
    return (
      <>
        <Loader>
          <h3>Finding your connections</h3>
        </Loader>
        <DotDiv></DotDiv>
      </>
    );
  }
  console.log(networkData);
  return (
    <>
      <div>
        <RequestImg alt="request" src={requestIcon} />
        <Link to="/profile">
          <ProfileImg alt="profile" src={profileIcon} />
        </Link>
      </div>
      {networkData ? (
        <NetworkWrapper>
          <SearchWrapper>
            <Form onSubmit="">
              <SearchInput
                type="search"
                id="network-search"
                name="network-search"
                aria-label="Search through your network"
                placeholder="Search my network..."
              />
            </Form>
          </SearchWrapper>
          {networkData.users.map((user) => {
            return (
              <Card>
                <ProfileImageDiv>
                  <ProfileAvatar alt="user avatar" src={avatar} />
                </ProfileImageDiv>
                <TextWrapper>
                  <UserName>{user.full_name}</UserName>
                  <UserInfoText>{user.speciality.speciality}</UserInfoText>
                  <UserInfoText>{user.workplace.workplace}</UserInfoText>
                </TextWrapper>
              </Card>
            );
          })}
          <Navigation />
        </NetworkWrapper>
      ) : (
        <>
          <Loader>
            <h3>Finding your connections</h3>
          </Loader>
          <DotDiv></DotDiv>
        </>
      )}
    </>
  );
}

export default NetworkPage;
