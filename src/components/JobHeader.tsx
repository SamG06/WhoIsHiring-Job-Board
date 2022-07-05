/* eslint-disable no-unused-vars */
/* eslint-disable import/no-named-as-default-member */
import React, { useState } from "react";
import { useJobs } from "../context/jobs-context";
import ShowSavedButton from "./ShowSavedButton";
import KeyWords from "./KeyWords/KeyWords";
import Button from '@mui/material/Button';

function JobsList() {
  const { jobs, keywords, setKeywords } = useJobs();

  const searchResultAmount = () => {
    if (keywords.length) {
      return <div className="results-amount">??? Results From Keywords</div>;
    }
    return <p></p>;
  };

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="intro">
          <h1>Who Is Hiring?</h1>
          <Button variant="contained">Hello World</Button>
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

        <ShowSavedButton />

      </div>
    </header>
  );
}

export default JobsList;
