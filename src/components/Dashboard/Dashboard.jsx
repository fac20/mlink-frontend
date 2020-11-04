import React from "react";

import dashboardQueries from "../../utils/dashboardQueries";
import {
  ColumnSection,
  Count,
  CountContainer,
  RowSection,
  Subtitle,
  DashboardBody,
  DotDiv,
  Loader
} from "./Dashboard.styles";
import profileIcon from "../../assets/images/profileicon.svg";
import Navigation from "../Navigation/Navigation.jsx";
import { ProfileImg, RequestImg } from "../Network/Network.styles.jsx";
import requestIcon from "../../assets/images/requesticon.svg";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const userInfo = { userId: 1, userLocation: "London" };
  const [totalCount, setTotalCount] = React.useState();

  React.useEffect(() => {
    console.log("useEffect");
    dashboardQueries(userInfo, setTotalCount);
  }, []);

  if (totalCount === undefined || totalCount === "") {
    return (
      <>
        <Loader>
          <h3>Finding your connections</h3>
        </Loader>
        <DotDiv></DotDiv>
      </>
    );
  }
  console.log(typeof totalCount);

  return (
  <>
      <div>
        <RequestImg alt="request" src={requestIcon} />
        <Link to="/profile">
          <ProfileImg alt="profile" src={profileIcon} />
        </Link>
      </div>
      <DashboardBody>
        <Subtitle>You have {totalCount ? totalCount.length : ""} existing mlinks</Subtitle>
        <ColumnSection>
          <RowSection>
            <span>Members that attended the same medical School</span>
            <CountContainer>
              <Count>{totalCount ? totalCount.sameMedSchool.length : ""}</Count>
            </CountContainer>
          </RowSection>
          <RowSection>
            <span>Members that have the same specialisation</span>
            <CountContainer>
              <Count>{totalCount ? totalCount.sameSpecialisation.length : ""}</Count>
            </CountContainer>
          </RowSection>
          <RowSection>
            <span>Members that work in the same workplace</span>
            <CountContainer>
              <Count>{totalCount ? totalCount.sameWorkplace.length : ""}</Count>
            </CountContainer>
          </RowSection>
          <RowSection>
            <span>Members that work in the same city</span>
            <CountContainer>
              <Count>{totalCount ? totalCount.sameCity.length : ""}</Count>
            </CountContainer>
          </RowSection>
        </ColumnSection>
        <Navigation />
      </DashboardBody>
    </>
  );
}
