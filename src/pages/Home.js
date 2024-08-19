import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">欢迎来到九型人格测试</h1>
      <p className="home-subtitle">了解你的性格类型，探索自我成长之路</p>
      <Link to="/test">
        <button className="start-test-btn">开始测试</button>
      </Link>
      <div className="personality-types">
        <h2>九种人格类型概览</h2>
        {/* 这里可以添加九种人格类型的简短描述 */}
      </div>
    </div>
  );
}

export default Home;