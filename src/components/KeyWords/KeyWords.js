/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";

function KeyWord({ setKeywords, keyWords }) {
  // eslint-disable-next-line no-unused-vars
  const [currentWord, setCurrentWord] = useState("");
  const [isAddingKeyword, setIsAddingKeyword] = useState(false);
  const addKeyword = () => {
    const words = keyWords.map(({ word }) => word);
    if (currentWord && !words.includes(currentWord)) {
      setKeywords((prev) => [...prev, { word: currentWord, required: true }]);
    }
  };

  const removeKeyword = (keyword) => {
    setKeywords(keyWords.filter(({ word }) => word !== keyword));
  };

  const keywordInput = useRef(null);

  useEffect(() => {
    keywordInput.current.focus();
  }, [isAddingKeyword]);

  const addingKeyword = () => {
    setIsAddingKeyword(true);
  };
  return (
    <div className="keywords-container">
      <p className="filter-message">Filter results with keywords</p>

      <div className="keywords-list">
        {keyWords.map(({ word }) => {
          return (
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            <div
              className="keyword"
              onClick={() => {
                removeKeyword(word);
              }}
              key={word}
            >
              {word}
            </div>
          );
        })}
        <button
          onClick={() => {
            addingKeyword();
          }}
          type="button"
          style={!isAddingKeyword ? { display: "block" } : { display: "none" }}
          className="add-keyword-btn"
        >
          Add Keyword +
        </button>
        <input
          ref={keywordInput}
          type="text"
          style={isAddingKeyword ? { display: "block" } : { display: "none" }}
          value={currentWord}
          onChange={(e) =>
            setCurrentWord(e.target.value.replace(/\s+/g, " ").trim())
          }
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              addKeyword();
              setCurrentWord("");
            }
          }}
          name="add keyword"
          id="addKeyword"
          autoComplete="off "
        />
      </div>
    </div>
  );
}

KeyWord.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  keyWords: PropTypes.any.isRequired,
  setKeywords: PropTypes.node.isRequired,
};

export default KeyWord;
