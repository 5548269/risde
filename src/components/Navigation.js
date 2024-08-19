import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/test">测试</Link></li>
        <li><Link to="/saved-results">保存的结果</Link></li>
        <li><Link to="/resources">资源</Link></li>
        <li><Link to="/about">关于</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;