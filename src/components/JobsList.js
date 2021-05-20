import React from "react";
import { useJobs } from "../context/jobs-context";

function JobsList() {
  const { jobs } = useJobs();
  return (
    <div>
      {jobs.map((v) => (
        <div key={v.id}>{v.title}</div>
      ))}
    </div>
  );
}

export default JobsList;
