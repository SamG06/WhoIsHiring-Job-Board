import React, { useContext, createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

interface JobsState {
  month: string,
  title: string,
  content: string,
  date_time: string,
  id: string,
  indentWidth: number
}

const JobsContext = createContext(null);

function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([]);
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        data.sort((a, b) => {
          return new Date(b.date_time).valueOf() - new Date(a.date_time).valueOf();
        });
        setJobs(data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        console.log("no more loading");
      });
  }, []);

  const value = { jobs, keywords, setKeywords };

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
