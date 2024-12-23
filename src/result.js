// src/Result.js
import React from 'react';

const Result = ({ career }) => {
  return (
    <div className="result">
      <h2>Your Suggested Career Path:</h2>
      <p>{career ? career : "No career suggestion available."}</p>
    </div>
  );
};

export default Result;
