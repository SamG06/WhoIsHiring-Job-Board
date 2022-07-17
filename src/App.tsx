import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import "./css/global.css";

import { JobsProvider } from "./context/jobs-context";
import { SavedProvider } from "./context/saved-context";
import JobsList from "./components/JobsList/JobsList";
import JobHeader from "./components/JobHeader";
import FullView from "./components/FullView/FullView";

function App() {
  return (
    <Router>
      <JobsProvider>
        <SavedProvider>
          <Routes>
            <Route path={"/"} element={<FullView />} />
          </Routes>
          <JobHeader />
          <JobsList />
        </SavedProvider>
      </JobsProvider>
    </Router>
  );
}

export default App;
