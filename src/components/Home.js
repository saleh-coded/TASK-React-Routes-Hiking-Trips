import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';

function Home() {
  return (
    <header className="masthead bg-primary text-white text-center">
      <Nav />
      <div className="container d-flex align-items-center flex-column">
        <h1 className="masthead-heading text-uppercase mb-0">
          Welcome To Hike
        </h1>
        <div className="divider-custom divider-light">
          <div className="divider-custom-line"></div>
          <div className="divider-custom-icon">
            <i className="fas fa-star"></i>
          </div>
          <div className="divider-custom-line"></div>
        </div>
        <p className="masthead-subheading font-weight-light mb-0">
          a delightful way to explore nature with friends and family
        </p>
      </div>
    </header>
  );
}


export default Home;
