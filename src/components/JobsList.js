import React, { useState, useEffect } from "react";
import { useJobs } from "../context/jobs-context";
import JobCard from "./JobCard";
import LoadingMessage from "./LoadingMessage";

function JobsList() {
  const { jobs } = useJobs();
  const [amount, setAmount] = useState(100);

  useEffect(() => {
    const showInterval = setInterval(() => {
      if (jobs.length < amount + 100) {
        setAmount(jobs.length);
        clearInterval(showInterval);
        return;
      }
      if (jobs.length > 1) {
        setAmount((prev) => prev + 100);
      }
    }, 100);
    return () => {
      clearInterval(showInterval);
    };
  }, [jobs, amount]);

  return (
    <div className="jobs-list">
      {jobs.length < 1 && <LoadingMessage />}
      {jobs.slice(0, amount).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}

export default JobsList;
