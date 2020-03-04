import React from "react";
import { Switch, Route } from "react-router-dom";
import StartPage from "./StartPage";
import CaregiverMain from "./CaregiverMain";
import ElderlyMain from "./ElderlyMain";
import ElderlyOne from "./ElderlyOne";
import SignUp from "./SignUp";

const Main = () => (
  <main>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/elderly" component={ElderlyMain} />
      <Route exact path="/caregiver" component={CaregiverMain} />
      <Route path="/caregiver/steve" component={ElderlyOne} />
      <Route path="/signup" component={SignUp} />
    </Switch>
  </main>
);

export default Main;
