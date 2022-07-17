import React, { useContext, createContext, useState, useEffect } from "react";

export interface JobsState {
  month: string,
  title: string,
  content: string,
  date_time: string,
  id: string,
  indentWidth: number,
  matches: string[],
}

export interface KeywordsInterface {
  word: string,
  required: boolean,
}
export interface JobsContextInterface {
  jobs: Array<JobsState>,
  keywords: Array<KeywordsInterface>,
  jobError: boolean,
  setKeywords:  React.Dispatch<React.SetStateAction<any>>
}

const JobsContext = createContext<JobsContextInterface>(null);

function JobsProvider({ children }) {
  const [jobs, setJobs] = useState<Array<JobsState>>([]);
  const [jobError, setJobError] = useState<boolean>(false);
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
        setJobError(true)
        console.log(err);
      })
      .finally(() => {
        console.log("no more loading");
      });
  }, []);

  const value = { jobs, keywords, jobError, setKeywords };

  return <JobsContext.Provider value={value}>{children} </JobsContext.Provider>;
}

function useJobs() {
  const context = useContext(JobsContext);

  if (context === undefined) {
    throw new Error("useJobs must be within a JobsProvider");
  }
  return context;
}

export { JobsProvider, useJobs };
