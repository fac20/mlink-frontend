import React from "react";

import dashboardQueries from "../../utils/dashboardQueries";
import { ColumnSection, Count, RowSection, Subtitle, DashboardBody } from "./Dashboard.styles";
import { DotDiv, Loader } from "./Dashboard.styles";
import Navigation from "../Navigation/Navigation.jsx";
import profileIcon from "../../assets/images/profileicon.svg";
import requestIcon from "../../assets/images/requesticon.svg";
import { ProfileImg, RequestImg } from "../Network/Network.styles.jsx";
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
    <DashboardBody>
      <div>
        <RequestImg alt="request" src={requestIcon} />
        <Link to="/profile">
          <ProfileImg alt="profile" src={profileIcon} />
        </Link>
      </div>
      <Subtitle>You have {totalCount ? totalCount.length : ""} existing mlinks</Subtitle>
      <ColumnSection>
        <RowSection>
          <span>Members that attended the same medical School</span>
          <Count>{totalCount ? totalCount.sameMedSchool.length : ""}</Count>
        </RowSection>
        <RowSection>
          <span>Members that have the same specialisation</span>
          <Count>{totalCount ? totalCount.sameSpecialisation.length : ""}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same workplace</span>
          <Count>{totalCount ? totalCount.sameWorkplace.length : ""}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same city</span>
          <Count>{totalCount ? totalCount.sameCity.length : ""}</Count>
        </RowSection>
      </ColumnSection>
      <Navigation />
    </DashboardBody>
  );
}
