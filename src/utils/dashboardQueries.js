import queryHelper from "./queryHelper";

export default function dashboardQueries(setTotalCount) {
  const userId = { userId: 1 };

  const dashboardQuery = `query  Myquery ($userId: Int!){
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
    
     sameCity: users(where: {current_location: {_eq: "London"}}) {
       full_name
       current_location
     }
   }`;
  // the result from the query will be
  return queryHelper(dashboardQuery, userId, "", "", setTotalCount);
}
