import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function ViewButton({ jobId }) {
  const location = useLocation();
  return (
    <Link
      className="view-link"
      to={`/view/${jobId}`}
      replace={location.pathname === `/view/${jobId}`}
    >
      View Job
    </Link>
  );
}

ViewButton.propTypes = {
  jobId: PropTypes.node.isRequired,
};
export default ViewButton;
