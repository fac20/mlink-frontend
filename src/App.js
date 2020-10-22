import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useLocation,
  useHistory
} from "react-router-dom";

// import Profile from "./components/Profile/Profile";
// import Dashboard from "./components/Dashboard/Dashboard";
// import Network from "./components/Network/Network";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
// import EditProfile from "./components/Profile/EditProfile";
// import Requests from "./components/Requests/Requests";
// import Signup from "./components/SignupLogin/Signup";
// import Login from "./components/SignupLogin/Login";
// import query from "./utils/SearchQueries";
export default function App() {
  //   React.useEffect(() => {
  //     const user_input = "Jane";
  //     const userSearchQuery = `
  //     {
  //       users(where: {full_name: {_ilike: "%e%"}}) {
  //         bio
  //         email
  //       }
  //     }`;
  //     const url = "https://tfb-mlink.herokuapp.com/v1/graphql";
  //     const options = {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //         "x-hasura-admin-secret": "secretKey"
  //       },
  //       body: JSON.stringify({ userSearchQuery })
  //     };

  //     fetch(url, options)
  //       .then((response) => {
  //         if (!response.ok) throw new Error("Request failed");
  //         return response.json();
  //       })
  //       .then((res) => console.log(res))
  //       .catch(console.error);
  //   }, []);

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Onboarding />
          </Route>
          {/* <Route path="/network" exact>
            <Network />
          </Route> */}
          {/* <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/profile/:name" exact>
            <Profile />
          </Route>
          <Route path="/edit-profile" exact>
            <EditProfile />
          </Route>
          <Route path="/requests" exact>
            <Requests />
          </Route>
          <Route path="/signup" exact>
            <Signup />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
}
