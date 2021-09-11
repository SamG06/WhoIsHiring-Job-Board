import React from "react";
import PropTypes from "prop-types";
import { useSaved } from "../../context/saved-context";

function JobCard({ job }) {
  const { saved, setSaved } = useSaved();
  let ids = [];
  if (saved) {
    ids = saved.map(({ id }) => id);
  }
  const isSaved = ids.includes(job.id);

  function saveJob() {
    if (!isSaved) {
      setSaved((prev) => [...prev, job]);
    }
  }

  function removeJob() {
    if (isSaved) {
      setSaved(saved.filter(({ id }) => id !== job.id));
    }
  }
  if (isSaved) {
    return (
      <button
        className="save-button"
        type="button"
        onClick={() => {
          removeJob();
        }}
      >
        Unsave job
      </button>
    );
  }
  return (
    <button
      className="save-button"
      type="button"
      onClick={() => {
        saveJob();
      }}
    >
      Save job
    </button>
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
