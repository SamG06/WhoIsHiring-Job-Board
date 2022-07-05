import React, { useContext, createContext, useState } from "react";
import PropTypes from "prop-types";

const SavedContext = createContext(null);

function SavedProvider({ children }) {
  const [saved, setSaved] = useState([]);
  const [showSaved, setShowSaved] = useState(false);
  const value = { saved, setSaved, showSaved, setShowSaved };

  return (
    <SavedContext.Provider value={value}>{children} </SavedContext.Provider>
  );
}

SavedProvider.propTypes = { children: PropTypes.node.isRequired };

function useSaved() {
  const context = useContext(SavedContext);

  if (context === undefined) {
    throw new Error("useSaved must be within a SavedProvider");
  }
  return context;
}

export { SavedProvider, useSaved };
