import React from "react";
import "./App.css";
import Header from "./Header";
import TextIdentification from "./TextIdentification";
import LabelsIdentification from "./LabelsIdentification";
import EntitiesIdentification from "./EntitiesIdentification";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/TextIdentification">
            <Header />
            <TextIdentification />
          </Route>
          <Route path="/LabelsIdentification">
            <Header />
            <LabelsIdentification />
          </Route>
          <Route path="/EntitiesIdentification">
            <Header />
            <EntitiesIdentification />
          </Route>
          <Route path="/">
            <Header />
            <h1>AWS Amplify Workshop</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
