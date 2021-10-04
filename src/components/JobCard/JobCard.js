/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { formatDistance } from "date-fns/esm";
import ViewButton from "../FullView/ViewButton";
import SaveButton from "./SaveButton";

function JobCard({ job }) {
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
          <a
            href={`https://news.ycombinator.com/item?id=${id}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.125 7.875L15.75 2.25"
                stroke="#EAEAEA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 2.25H15.75V6"
                stroke="#EAEAEA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.75 10.5V14.25C15.75 14.6478 15.592 15.0294 15.3107 15.3107C15.0294 15.592 14.6478 15.75 14.25 15.75H3.75C3.35218 15.75 2.97064 15.592 2.68934 15.3107C2.40804 15.0294 2.25 14.6478 2.25 14.25V3.75C2.25 3.35218 2.40804 2.97064 2.68934 2.68934C2.97064 2.40804 3.35218 2.25 3.75 2.25H7.5"
                stroke="#EAEAEA"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <h2>{title}</h2>
        <SaveButton job={job} />
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

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.node,
    content: PropTypes.node,
    id: PropTypes.node,
    matches: PropTypes.node,
    date_time: PropTypes.node,
  }).isRequired,
};

export default JobCard;
