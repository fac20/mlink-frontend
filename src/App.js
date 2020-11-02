import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Profile from "./components/Profile/Profile.jsx";
import NetworkPage from "./components/Network/Network";
import Dashboard from "./components/Dashboard/Dashboard";
import Onboarding from "./components/Onboarding/Onboarding.jsx";
import ProfileSetup from "./components/Profile/ProfileSetup.jsx";
import SignUpForm from "./components/Registration/Signup.jsx";
import LoginForm from "./components/Registration/Login.jsx";
import PageNotFound from "./components/PageNotFound/PageNotFound.jsx";

export default function App() {
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
          <Route path="/network" exact>
            <NetworkPage />
          </Route>
          <Route path="/dashboard" exact>
            <Dashboard />
          </Route>
          <Route>
            <PageNotFound />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}
