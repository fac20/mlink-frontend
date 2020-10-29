import queryHelper from "./queryHelper";

// Medical schools with a user id
export default (userId, setProfileInfo) => {
  // all queries for the profile page except for current job
  const profileQuery = `query MyQuery ($userId: Int!){
        headerInfo: users(where: {id: {_eq: $userId}}) {
            full_name
            user_postgrad_exams {
            postgrad_exam {
                postgrad_exam
            }
            }
            job_title {
            job_title
            }
            speciality {
            speciality
            }
            open_to_collaboration 
            bio
        }
    
        Medical_School:  medical_schools(where: {users: {id: {_eq: $userId}}}) {
            medical_school
        }
        
        Postgraduate_Exams: user_postgrad_exams(where: {user_id: {_eq: $userId}}) {
            exam_date
            postgrad_exam {
                postgrad_exam
            }
        }

        Previous_Jobs: user_jobs(where: {user_id: {_eq: $userId}}) {
            job_start
            job_end
            job_title {
            job_title
            }
        } 
    }`;

  return queryHelper(profileQuery, userId, "", "", setProfileInfo);
};
