import React from 'react';
import { Link } from 'react-router-dom';

function SavedResults() {
  const savedResults = JSON.parse(localStorage.getItem('enneagramResults') || '[]');

  return (
    <div className="saved-results">
      <h1>保存的测试结果</h1>
      {savedResults.length === 0 ? (
        <p>您还没有保存任何测试结果。</p>
      ) : (
        <ul>
          {savedResults.map((item, index) => (
            <li key={index}>
              日期：{new Date(item.date).toLocaleString()} - 
              主要类型：{item.result}
              <Link to={{
                pathname: '/results',
                state: { result: item.result, answers: item.answers }
              }}>
                <button>查看详情</button>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/test">
        <button>进行新的测试</button>
      </Link>
    </div>
  );
}

export default SavedResults;
