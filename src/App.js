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

import Profile from "./components/Profile/Profile.jsx";
// import Dashboard from "./components/Dashboard/Dashboard";
import NetworkPage from "./components/Network/Network";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import ProfileSetup from "./components/Profile/ProfileSetup.jsx";
// import EditProfile from "./components/Profile/EditProfile";
// import Requests from "./components/Requests/Requests";
import SignUpForm from "./components/Registration/Signup.jsx";
import LoginForm from "./components/Registration/Login.jsx";
import query from "./utils/SearchQueries";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

export default function App() {
  // React.useEffect(() => {
  //   const input = "%Doe%";
  //   query(input);
  // }, []);

  return (
    <Router>
      <main>
        <Switch>
          <Route path="/" exact>
            <Onboarding />
          </Route>
          <Route path="/profile" exact>
            <Profile />
          </Route>
          <Route path="/setup" exact>
            <ProfileSetup />
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/signup" exact>
            <SignUpForm />
          </Route>
          <Route path="/404" exact>
            <PageNotFound />
          </Route>
          <Route path="/network" exact>
            <NetworkPage />
          </Route>
          {/* <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route path="/edit-profile" exact>
            <EditProfile />
          </Route>
          <Route path="/requests" exact>
            <Requests />
          </Route>

          <Route path="/login" exact>
            <Login />
          </Route> */}
        </Switch>
      </main>
    </Router>
  );
}
