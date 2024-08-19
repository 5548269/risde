import React from 'react';
import { useLocation } from 'react-router-dom';

function Results() {
  const location = useLocation();
  const { result } = location.state;

  return (
    <div className="results-container">
      <h1>测试结果</h1>
      {result.map((score, index) => (
        <p key={index}>类型 {index + 1}: {score}</p>
      ))}
    </div>
  );
}

export default Results;