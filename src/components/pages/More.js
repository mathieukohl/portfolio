import React from 'react';
import { Link } from 'react-router-dom';
import '../../css/landingPage.css';

import img1 from "../../assets/img/home/freelance.jpg";
import img2 from "../../assets/img/home/dev.jpeg";


export default function More() {
  return (
    <div className="landing-page">
      <div className="image-container">
      <Link to="/more/freeHome">
          <h1 className='img-title'>Need a freelancer ?</h1>
          <img className='img-landing' src={img1} alt="img" />
        </Link>
      </div>
      <div className="image-container">
        <Link to="/more/learnHome">
          <h1 className='img-title'>Want to learn to dev ?</h1>
          <img className='img-landing' src={img2} alt="img" />
        </Link>
      </div>
    </div>
  );
};
