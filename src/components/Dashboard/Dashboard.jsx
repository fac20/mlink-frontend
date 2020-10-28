import React from "react";
import queryHelper from "../../utils/queryHelper";
import { ColumnSection, Count, RowSection, Subtitle, DashboardBody } from "./Dashboard.styles";

export default function Dashboard() {
  const userId = { userId: 1 };
  const medschoolquery = `query Myquery ($userId: Int!) {
        users(where: {medicalSchoolByMedicalSchool: {users: {id: {_eq:  $userId}}}}) {
          id
          full_name
          medical_school
        }
      }`;

  const specialityquery = `  query MyQuery ($userId: Int!) {
        users(where: {speciality: {users: {id: {_eq: $userId}}}}) {
          id
          speciality {
            speciality
          }
          full_name
        }
      }`;
  const workplacequery = `query MyQuery  ($userId: Int!) {
      users(where: {workplace: {users: {id: {_eq: $userId}}}}) {
         full_name
         workplace {
           workplace
         }
       }
     }`;

  const usersLocationQuery = `query MyQuery ($userId: Int!) {
    users(where: {current_location: {users: {id: {_eq: $userId}}}}) {
       full_name
       current_location
     }
   }`;

  const locationQuery = `query MyQuery  {
    users(where: {current_location: {_eq: "London"}}) {
      id
      full_name
      current_location
    }
  }`;
  const [totalCount, setTotalCount] = React.useState("");
  const [medicalSchoolCount, setMedicalSchoolCount] = React.useState([]);
  const [specialisationCount, setSpecialisationCount] = React.useState("");
  const [workplaceCount, setWorkplaceCount] = React.useState("");
  const [locationCount, setLocationCount] = React.useState("");

  const [currentLocation, setCurrentLocation] = React.useState("");

  React.useEffect(() => {
    queryHelper(medschoolquery, userId, "", "", setMedicalSchoolCount);
    queryHelper(specialityquery, userId, "", "", setSpecialisationCount);
    queryHelper(workplacequery, userId, "", "", setWorkplaceCount);
    queryHelper(usersLocationQuery, userId, "", "", setCurrentLocation);
  }, []);

  if (!medicalSchoolCount.users || !specialisationCount.users || !workplaceCount.users) {
    return <h3>...Loading</h3>;
  }
  // React.useEffect(() => {
  // queryHelper(locationQuery, currentLocation, "", "", setLocationCount);

  // });

  console.log(locationCount);
  return (
    <DashboardBody>
      <Subtitle>You have {totalCount} existing mlinks</Subtitle>
      <ColumnSection>
        <RowSection>
          <span>Members that attended the same medical School</span>
          <Count>{medicalSchoolCount.users.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that have the same specialisation</span>
          <Count>{specialisationCount.users.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that wokr in the same workplace</span>
          <Count>{workplaceCount.users.length}</Count>
        </RowSection>
        <RowSection>
          <span>Members that work in the same city</span>
          <Count>{locationCount}</Count>
        </RowSection>
      </ColumnSection>
    </DashboardBody>
  );
}
