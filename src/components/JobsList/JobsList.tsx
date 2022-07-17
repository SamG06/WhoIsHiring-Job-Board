import React, { useState, useEffect, useCallback } from "react";
import { JobsState, useJobs } from "../../context/jobs-context";
import JobCard from "../JobCard/JobCard";
import LoadingMessage from "./LoadingMessage";
import { useSaved } from "../../context/saved-context";

function JobsList() {
  const { jobs, keywords } = useJobs();
  const [amount, setAmount] = useState(30);
  const { saved, showSaved } = useSaved();

  useEffect(() => {
    setAmount(30);
  }, [keywords, showSaved]);

  // LOAD JOBS ON SCROLL
  const scrollLoadJobs = useCallback((): void => {
    const distanceScrolled = window.innerHeight + window.scrollY;
    const fullHeight = document.body.offsetHeight - 800;
    const scrolledToBottom = distanceScrolled >= fullHeight;

    if (scrolledToBottom) {
      const hitJobLimit = amount + 30 < jobs.length;

      if (hitJobLimit) {
        setAmount((prev) => prev + 30);
        return;
      }

      setAmount(jobs.length);
    }
  }, [amount, jobs.length]);

  const [jobsToShow, setJobsToShow] = useState<JobsState[]>([]);

  const keywordMatching = useCallback((job: JobsState): boolean => {
    const { title, content } = job;
    const lowerTitle = title.toLocaleLowerCase();
    const lowerContent = content.toLocaleLowerCase();

    const matches: string[] = [];

    let requiredWords = keywords.reduce((filtered, {required, word}) =>{
      if(required) filtered.push(word.toLocaleLowerCase()); 
      return filtered
    }, [] as string[])


    keywords.forEach(({ word }) => {
      const lowerWord = word.toLocaleLowerCase();

      if (
        lowerTitle.includes(lowerWord) ||
        (lowerContent.includes(lowerWord) && word !== "")
      ) {
        const hasRequired = (w) => {
          return lowerTitle.includes(w) || lowerContent.includes(w);
        };

        const matchFound =
          requiredWords.every(hasRequired) || !requiredWords.length;

        if (matchFound) {
          matches.push(word);
        }
      }
    });

    if (matches.length > 0) {
      setJobsToShow((toShow) => [...toShow, { ...job, matches }]);
      return true;
    }

    return false;
  }, [keywords])

  useEffect(() => {
    if (!jobs.length) return;

    if (!keywords.length) {
      setJobsToShow(jobs);
    } else {
      setJobsToShow([]);
      
      jobs.forEach((job, index) => {
        keywordMatching(job);
      });
    }
    window.addEventListener("scroll", scrollLoadJobs);
  }, [jobs, keywordMatching, keywords, scrollLoadJobs]);

  return (
    <div className="jobs-list">
      {!jobs.length && <LoadingMessage />}

        {showSaved && saved.map((job) => <JobCard key={job.id} job={job} />)}
        
        {!showSaved &&
          jobsToShow
            .slice(0, amount)
            .map((job) => <JobCard key={job.id} job={job} />)}
    </div>
  );
}

export default JobsList;
