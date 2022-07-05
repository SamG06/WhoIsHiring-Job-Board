/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";

function ViewButton({ jobId }) {
  const location = useLocation();
  return (
    <Link
      className="view-button"
      type="button"
      to={`/view/${jobId}`}
      replace={location.pathname === `/view/${jobId}`}
    >
      View more
    </Link>
  );
}

ViewButton.propTypes = {
  jobId: PropTypes.node.isRequired,
};
export default ViewButton;
