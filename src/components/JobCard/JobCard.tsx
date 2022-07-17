/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns";
import ViewButton from "../FullView/ViewButton";
import SaveButton from "./SaveButton";
import { JobsState } from "../../context/jobs-context";


interface JobCardProps {
  job: JobsState
}

function JobCard({ job }: JobCardProps) {
  const { title, content, id } = job;
  const [fullView, setFullView] = useState(false);

  const keywordMatches = () => {
    if (job.matches) {
      return job.matches.map((match) => (
        <div className="keyword-match">{match}</div>
      ));
    }
    return "";
  };
  const utcTime = `${job.date_time}Z`;
  return (
    <article className="job-card">
      <div className="title-side">
        <div className="top">
          <span className="date">
            {formatDistance(new Date(utcTime), new Date(), {
              addSuffix: true,
            })}
          </span>
        </div>

        <h2>{title}</h2>
   
      </div>
      <div className="content-side">
        <p
          className={`main-content ${fullView ? "main-content-full" : ""}`}
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="keyword-matches">{keywordMatches()}</div>
        <button
          type="button"
          className={`view-button ${fullView ? "less" : ""}`}
          onClick={() => {
            setFullView((prev) => !prev);
          }}
        >
          {fullView ? "View Less" : "View More"}
        </button>
      </div>
    </article>
  );
}

export default JobCard;
