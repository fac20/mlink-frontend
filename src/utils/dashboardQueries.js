import queryHelper from "./queryHelper";

export default (userInfo, setTotalCount) => {
  const { userId, userLocation } = userInfo;
  console.log(userId, userLocation);
  // contained query that gets all connections for different cases and returns a json with all the data
  const dashboardQuery = `query  Myquery ($userId: Int!, $userLocation: String!){
    sameMedSchool: users(where: {medicalSchoolByMedicalSchool: {users: {id: {_eq:  $userId}}}}) {
      idl..,p[]
      full_name
      medical_school
    }
  
    sameSpecialisation: users(where: {speciality: {users: {id: {_eq: $userId}}}}) {
       full_name
       speciality {
         speciality
       }
     }
     sameWorkplace: users(where: {workplace: {users: {id: {_eq: $userId}}}}) {
       full_name
       workplace {
         workplace
       }
     }
    
     sameCity: users(where: {current_location: {_eq: $userLocation}}) {
       full_name
       current_location
     }
   }`;

  return queryHelper(dashboardQuery, { userId, userLocation }, "", "", setTotalCount);
};
