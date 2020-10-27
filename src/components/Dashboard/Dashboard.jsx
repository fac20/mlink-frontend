import React from "react";
import queryHelper from "../../utils/queryHelper";
import { ColumnSection, Count, RowSection, Subtitle, DashboardBody } from "./Dashboard.styles";

export default function Dashboard() {
  const userId = { userId: 1 };
  const query = `query Myquery ($userId: Int!) {
        users(where: {medicalSchoolByMedicalSchool: {users: {id: {_eq:  $userId}}}}) {
          id
          full_name
          medical_school
        }
      }`;

  const [totalCount, setTotalCount] = React.useState("");
  const [medicalSchoolCount, setMedicalSchoolCount] = React.useState([]);
  const [specialisationCount, setspecialisationCount] = React.useState("");
  const [workplaceCount, setWorkplaceCount] = React.useState("");
  const [locationCount, setLocationCount] = React.useState("");

  React.useEffect(() => {
    queryHelper(query, userId, "", "", setMedicalSchoolCount);
  }, []);

  console.log(medicalSchoolCount);

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
