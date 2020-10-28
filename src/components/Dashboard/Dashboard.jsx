import React from "react";
// import queryHelper from "../../utils/queryHelper";
import dashboardQueries from "../../utils/dashboardQueries";

import { ColumnSection, Count, RowSection, Subtitle, DashboardBody } from "./Dashboard.styles";

export default function Dashboard() {
  // create user's id variable to use when fetching the connection data
  const userInfo = { userId: 1, userLocation: "London" };
  const [totalCount, setTotalCount] = React.useState("");

  React.useEffect(() => {
    dashboardQueries(setTotalCount, userInfo);
  }, []);

  //The loading code below works but will cause a bug. If the user doesn't have any matches the page will load the H3 forever. Need a forward / back button or setInterval timer to skip the page?
  if (totalCount === "") {
    return <h3>Finding your connections</h3>;
  }

  return (
    <DashboardBody>
      <Subtitle>You have {totalCount.length} existing mlinks</Subtitle>
      <ColumnSection>
        <RowSection>
          <span>Members that attended the same medical School</span>
          <Count>{totalCount.sameMedSchool.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that have the same specialisation</span>
          <Count>{totalCount.sameSpecialisation.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same workplace</span>
          <Count>{totalCount.sameWorkplace.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same city</span>
          <Count>{totalCount.sameCity.length}</Count>
        </RowSection>
      </ColumnSection>
    </DashboardBody>
  );
}
