import React from "react";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import "./index.css";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="banner-img">
        <div className="title">
          <h3>
            Find the <span>Right Job</span> In the
            <br />
            <span> Right Companies</span>
          </h3>
          <div className="small-tagline">
            <p>Got fired..!! Get Ready to be hired</p>
          </div>
        </div>
        <div className="button" data-testid="btn">
          <Link to="/Jobs">Browse Jobs</Link>
        </div>
      </div>
      <div className="social-media" data-testid="icons">
  <a href="../../images/insta.jpg" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook fa-2x"></i>
  </a>
  <a href="../../images/linkedin.webp" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-google fa-2x"></i>
  </a>
  <a href="../../images/git.png" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube fa-2x"></i>
  </a>
</div>

    </>
  );
};

export default Home;
