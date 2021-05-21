import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const ViewContext = createContext();

function ViewProvider({ children }) {
  const [view, setView] = useState(null);

  const value = { view, setView };

  return <ViewContext.Provider value={value}>{children} </ViewContext.Provider>;
}

ViewProvider.propTypes = { children: PropTypes.node.isRequired };

function useView() {
  const context = useContext(ViewContext);

  if (context === undefined) {
    throw new Error("useJobs must be within a JobsProvider");
  }
  return context;
}

export { ViewProvider, useView };
