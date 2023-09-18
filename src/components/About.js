import React from 'react';
import meImg from "../assets/img/kohlmathieu.png"
import navIcon1 from "../assets/img/nav-icon3.svg";
import navIcon2 from "../assets/img/strava.svg";

export const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-left-content">
          <h2>About Me</h2>
          <p className='about-paragraph'>
          I'm Mathieu, a 27-year-old enthusiast with a zest for life and a fervent love for all things active and adventurous. From conquering triathlons to gliding down snow-covered slopes, the thrill of sport courses through my veins. Beyond the thrill of physical pursuits, my passion extends to the cosmos. I'm captivated by the mysteries of space, finding wonder in the galaxies and constellations that paint the night sky. Travel is my gateway to understanding the world, and meeting new people from diverse walks of life is my favorite way to broaden my horizons.
          </p>
          <div className="social-icon-footer">
              <a href="https://www.instagram.com/kohlmathieu/"><img src={navIcon1} alt="instagram" /></a>
              <a href="https://www.strava.com/athletes/80142114"><img src={navIcon2} alt="strava" /></a>
          </div>
        </div>
        <div className="about-right-content">
          <img src={meImg} alt="About Me" />
        </div>
      </div>
    </section>
  );
}


