import React from "react";

import { ColumnSection, Count, RowSection, Subtitle, DashboardBody } from "./Dashboard.styles";

export default function Dashboard() {
  const [totalCount, setTotalCount] = React.useState("");
  const [medicalSchoolCount, setmedicalSchoolCount] = React.useState("");
  const [specialisationCount, setspecialisationCount] = React.useState("");
  const [workplaceCount, setWorkplaceCount] = React.useState("");
  const [locationCount, setLocationCount] = React.useState("");
  return (
    <DashboardBody>
      <Subtitle>You have {totalCount} existing mlinks</Subtitle>
      <ColumnSection>
        <RowSection>
          <span>Members that attended the same medical School</span>
          <Count>{medicalSchoolCount}</Count>
        </RowSection>
        <RowSection>
          <span>Members that have the same specialisation</span>
          <Count>{specialisationCount}</Count>
        </RowSection>
        <RowSection>
          <span>Members that wokr in the same workplace</span>
          <Count>{workplaceCount}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same city</span>
          <Count>{locationCount}</Count>
        </RowSection>
      </ColumnSection>
    </DashboardBody>
  );
}
