import React from "react";
import PropTypes from "prop-types";
import ViewButton from "./FullView/ViewButton";

function JobCard({ job }) {
  const { title, content, id } = job;

  const shortened = {
    title: title.trim().slice(0, 70),
    content: content.slice(0, 130),
  };
  return (
    <article className="job-card">
      <h2>{shortened.title}...</h2>
      <p>{shortened.content}...</p>
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
