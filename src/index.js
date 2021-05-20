import React from "react";
import ReactDOM from "react-dom";
import "./css/global.css";
import { JobsProvider } from "./context/jobs-context";
import JobsList from "./components/JobsList";
import MobileNav from "./components/MobileNav";

function App() {
  return (
    <JobsProvider>
      <JobsList />
      <MobileNav />
    </JobsProvider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
