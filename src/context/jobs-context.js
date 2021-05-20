import React, { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const JobsContext = createContext();

function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setJobs(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("no more loading");
      });
  }, []);

  const value = { jobs, setJobs };

  return <JobsContext.Provider value={value}>{children} </JobsContext.Provider>;
}

JobsProvider.propTypes = { children: PropTypes.node.isRequired };

function useJobs() {
  const context = useContext(JobsContext);

  if (context === undefined) {
    throw new Error("useJobs must be within a JobsProvider");
  }
  return context;
}

export { JobsProvider, useJobs };
