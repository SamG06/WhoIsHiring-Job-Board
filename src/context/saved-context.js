import React, { useContext, createContext } from "react";
import PropTypes from "prop-types";
import createPersistedState from "use-persisted-state";

const SavedContext = createContext();

function SavedProvider({ children }) {
  const savedPersistedState = createPersistedState("saved");
  const [saved, setSaved] = savedPersistedState([]);
  const value = { saved, setSaved };

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
