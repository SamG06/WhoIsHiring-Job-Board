/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ViewButton from "../FullView/ViewButton";
import SaveButton from "./SaveButton";

function JobCard({ job }) {
  const { title, content, id } = job;

  const keywordMatches = () => {
    if (job.matches) {
      return job.matches.map((match) => (
        <div className="keyword-match">{match}</div>
      ));
    }
    return "";
  };

  return (
    <article className="job-card">
      <div className="title-side">
        <h2>{title}</h2>
        <SaveButton job={job} />
      </div>
      <div className="content-side">
        <p
          className="main-content"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <div className="keyword-matches">{keywordMatches()}</div>
        <ViewButton jobId={id} />
      </div>

      {/* <div className="buttons">
        <ViewButton jobId={id} />
        <SaveButton job={job} />
        <a
          href={`https://news.ycombinator.com/item?id=${id}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          View Original
        </a>
      </div> */}
    </article>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.node,
    content: PropTypes.node,
    id: PropTypes.node,
    matches: PropTypes.node,
  }).isRequired,
};

export default JobCard;
