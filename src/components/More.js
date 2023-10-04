// src/LandingPage.js
import React from 'react';
import '../landingPage.css';

import img1 from "../assets/img/home/freelance.jpg";
import img2 from "../assets/img/home/dev.jpeg";


export default function More() {
  return (
    <div className="landing-page">
      <div className="image-container">
        <a href="/page1">
          <img className='img-landing' src={img1} alt="img" />
        </a>
      </div>
      <div className="image-container">
        <a href="/page2">
          <img className='img-landing' src={img2} alt="img" />
        </a>
      </div>
    </div>
  );
};
