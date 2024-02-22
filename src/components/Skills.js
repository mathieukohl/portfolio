import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from 'react';
import { skills } from "../assets/data/data";

export const Skills = () => {
    return (
      <section id="skills">
        <div className="skills-container">
          <div className="skills-header">
            <ChipIcon className="skills-icon" />
            <h1 className="skills-title">
              Skills &amp; Technologies
            </h1>
            <p className="skills-description">
            As a full-stack developer, I possess a wide range of technical skills and experience that enable me to create robust and high-quality solutions. Some of my key skills include:
            </p>
          </div>
          <div className="skills-list" id="horizontal-scroll">
            {skills.map((skill, index) => (
              <div key={skill} className="skill-item">
                <div key={index} className="skill-card">
                  <BadgeCheckIcon className="skill-icon" />
                  <span className="skill-text">
                    {skill}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }