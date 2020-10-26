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
import ProfileSetup from "./components/Profile/ProfileSetup.jsx";
// import EditProfile from "./components/Profile/EditProfile";
// import Requests from "./components/Requests/Requests";
// import Signup from "./components/SignupLogin/Signup";
// import Login from "./components/SignupLogin/Login";
import query from "./utils/SearchQueries";

export default function App() {
  React.useEffect(() => {
    const input = "%Doe%";
    query(input);
  }, []);

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Onboarding />
          </Route>
          <Route path="/setup" exact>
            <ProfileSetup />
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
