/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
import React, { useState, useEffect } from "react";
import { useJobs } from "../context/jobs-context";
import JobCard from "./JobCard/JobCard";
import LoadingMessage from "./LoadingMessage";
import KeyWords from "./KeyWords/KeyWords";
import { useSaved } from "../context/saved-context";

function JobsList() {
  const { jobs } = useJobs();
  const [amount, setAmount] = useState(30);
  const [scrollLimitReached, setScrollLimitReached] = useState(false);
  const [keywords, setKeywords] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const { saved } = useSaved();

  useEffect(() => {
    setAmount(30);
  }, [keywords, showSaved]);

  useEffect(() => {
    console.log(amount);
  }, [amount]);

  useEffect(() => {
    if (jobs.length) {
      const onScroll = () => {
        if (
          window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 800
        ) {
          if (amount + 30 < jobs.length) {
            setAmount((prev) => prev + 30);
          } else {
            setAmount(jobs.length);
            console.log("limit");
          }
        }
      };
      window.addEventListener("scroll", onScroll);
    }
  }, [jobs]);

  const keywordMatching = ({ title, content }) => {
    if (!keywords.length) return true;
    const lowerTitle = title.toLocaleLowerCase();
    const lowerContent = content.toLocaleLowerCase();
    const matches = [];
    const requiredWords = keywords.filter(({ required }) => required === true);
    const lowerRequiredWords = requiredWords.map(({ word }) =>
      word.toLocaleLowerCase()
    );
    keywords.forEach(({ word }) => {
      const lowerWord = word.toLocaleLowerCase();
      if (
        lowerTitle.includes(lowerWord) ||
        (lowerContent.includes(lowerWord) && word !== "")
      ) {
        const hasRequired = (w) => {
          return lowerTitle.includes(w) || lowerContent.includes(w);
        };
        if (
          lowerRequiredWords.every(hasRequired) ||
          requiredWords.length === 0
        ) {
          matches.push(word);
        }
      }
    });
    if (matches.length > 0) {
      return true;
    }
    return false;
  };

  const jobToShow = jobs.filter((job) => keywordMatching(job));

  return (
    <div className="main-container">
      <div className="intro">
        <h1>Who Is Hiring?</h1>

        <p>
          {jobs.length} Job Results (from{" "}
          <a
            href="https://news.ycombinator.com/submitted?id=whoishiring"
            target="_blank"
            rel="noopener noreferrer"
          >
            hackernews
          </a>
          )
        </p>
      </div>
      <KeyWords keyWords={keywords} setKeywords={setKeywords} />

      <button
        type="button"
        onClick={() => {
          setShowSaved(!showSaved);
        }}
      >
        Show my saved jobs
      </button>

      {keywords.length > 0 && (
        <div className="results-amount">
          {jobToShow.length} Results From Keywords
        </div>
      )}

      <div className="jobs-list">
        {!jobs.length && <LoadingMessage />}
        {showSaved && saved.map((job) => <JobCard key={job.id} job={job} />)}
        {!showSaved &&
          jobToShow
            .slice(0, amount)
            .map((job) => <JobCard key={job.id} job={job} />)}
      </div>
    </div>
  );
}

export default JobsList;
