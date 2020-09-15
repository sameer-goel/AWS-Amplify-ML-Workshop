import React from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import TextIdentification from "./TextIdentification";
import LabelsIdentification from "./LabelsIdentification";
import EntitiesIdentification from "./EntitiesIdentification";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Amplify from "aws-amplify";
import { AmazonAIPredictionsProvider } from "@aws-amplify/predictions";
import awsconfig from "./aws-exports";
Amplify.configure(awsconfig);
Amplify.addPluggable(new AmazonAIPredictionsProvider());

const LandingPageContent = () => {
  return (
    <div className="LandingPageContent">
      <h1>AWS Amplify - ML Applications</h1>
      <p>
        AWS Amplify Predictions category provides a solution for using AI and ML
        cloud services to enhance your application.
      </p>
      <ol>
        <li>
          <a href="/TextIdentification">Text Identification</a>
        </li>
        <li>
          <a href="/LabelsIdentification">Labels Identification</a>
        </li>
        <li>
          <a href="/EntitiesIdentification">Celeberity Identification</a>
        </li>
      </ol>
    </div>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/TextIdentification">
            <Header />
            <TextIdentification />
            <Footer />
          </Route>
          <Route path="/LabelsIdentification">
            <Header />
            <LabelsIdentification />
            <Footer />
          </Route>
          <Route path="/EntitiesIdentification">
            <Header />
            <EntitiesIdentification />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <LandingPageContent />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
