import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import "./css/global.css";

import { JobsProvider } from "./context/jobs-context";
import { ViewProvider } from "./context/view-context";
import JobsList from "./components/JobsList";
import MobileNav from "./components/MobileNav";
import FullView from "./components/FullView/FullView";

function App() {
  return (
    <Router>
      <JobsProvider>
        <ViewProvider>
          <Switch>
            <Route exact path={["/", "/view/:jobId"]} component={FullView} />
          </Switch>
          <JobsList />
          <MobileNav />
        </ViewProvider>
      </JobsProvider>
    </Router>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
