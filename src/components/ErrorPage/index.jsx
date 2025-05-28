import React from 'react'
import './index.css';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <>
      <div className="error-page">
        <div class="error">Welcome To JobPortal</div>
        <br />
        <br />
        <span class="info">Search Your Dream Job</span>
        <img
          src="http://images2.layoutsparks.com/1/160030/too-much-tv-static.gif"
          class="static"
          alt="404-error"
        />
        <div className="home-button">
          <Link to="/Home">Go To Home</Link>
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
