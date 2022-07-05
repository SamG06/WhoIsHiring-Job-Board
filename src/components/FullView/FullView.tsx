/* eslint-disable react/no-danger */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useJobs } from "../../context/jobs-context";

interface CurrentJobState {
  title: string,
  content: string,
}

function FullView() {
  const [currentJob, setCurrentJob] = useState<CurrentJobState>(null);

  const { jobs } = useJobs();

  const { jobId } = useParams();

  console.log(jobId);
  useEffect(() => {
    const job = jobs.find(({ id }) => id === jobId);
    if (job) {
      setCurrentJob(job);
    }
  }, [jobId]);

  return (
    <div className={`full-view ${jobId ? "open-view" : ""}`}>
      <h2>{currentJob?.title}</h2>
      <p dangerouslySetInnerHTML={{ __html: currentJob?.content }} />
    </div>
  );
}

export default FullView;
