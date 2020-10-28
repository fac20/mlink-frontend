query {
    sameSpecialisation: users(where: {speciality: {users: {id: {_eq: 1}}}}) {
       full_name
       speciality {
         speciality
       }
     }
     sameWorkplace: users(where: {workplace: {users: {id: {_eq: 1}}}}) {
       full_name
       workplace {
         workplace
       }
     }
     sameCity: users(where: {current_location: {_eq: "London"}}) {
       full_name
       current_location
     }
   }