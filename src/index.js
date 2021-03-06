import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./css/global.css";

import { JobsProvider } from "./context/jobs-context";
import { SavedProvider } from "./context/saved-context";
import JobsList from "./components/JobsList";
import JobHeader from "./components/JobHeader";
// import MobileNav from "./components/MobileNav";
import FullView from "./components/FullView/FullView";

function App() {
  return (
    <Router>
      <JobsProvider>
        <SavedProvider>
          <Switch>
            <Route exact path={["/", "/view/:jobId"]} component={FullView} />
          </Switch>
          <JobHeader />
          <JobsList />
        </SavedProvider>
      </JobsProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
