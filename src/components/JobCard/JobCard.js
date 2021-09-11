/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import ViewButton from "../FullView/ViewButton";
// import SaveButton from "./SaveButton";

function JobCard({ job }) {
  const { title, content, id } = job;

  return (
    <article className="job-card">
      <h2>{title}</h2>
      <p
        className="main-content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
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
      <ViewButton jobId={id} />
    </article>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    title: PropTypes.node,
    content: PropTypes.node,
    id: PropTypes.node,
  }).isRequired,
};

export default JobCard;
