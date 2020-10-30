import queryHelper from "./queryHelper";

export default (setAllUsers) => {
  const AllUsersQuery = `query MyQuery {
    users {
      full_name
      speciality {
        speciality
      }
      workplace {
        workplace
      }
    }
  }`;

  return queryHelper(AllUsersQuery, {}, "", "", setAllUsers);
};
