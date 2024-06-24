import React from 'react';
import './Header.css';
import { FaSearch } from 'react-icons/fa';
 // Adjust the path based on your project structure

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <div className="dropdown">
          <button className="dropbtn">Find Designers
            <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <a href="#">Design Search</a>
            <a href="#">Post a job</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Inspiration
            <span className="dropdown-arrow"></span>
          </button>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Courses
            <span className="dropdown-arrow">▼</span>
          </button>
          <div className="dropdown-content">
            <a href="#">UX Diploma</a>
            <a href="#">UI Certificate</a>
            <a href="#">Live Interactive Workshop</a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Jobs
          </button>
          <div className="dropdown-content">
          </div>
        </div>
        <button className="go-pro-btn">Go Pro</button>
      </div>
      <div className="header-center">
        <div className="logo">
        <img src="/image/logo.png" alt="logo" />
        </div>
      </div>
      <div className="header-right">
        <div className="search-bar">
          <FaSearch className="search-icon" />
          <input type="text" className="search-input" placeholder="Search..." />
        </div>
        <div className="profile-icon">
        <img src="/image/profile.jpg" alt="profile" />
        </div>
      </div>
    </header>
  );
};

export default Header;
