import React from 'react';
import './Resume.css';

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="resume">
      <div className="header">
        <h1 className="name">John Doe</h1>
        <p className="job-title">Frontend Developer</p>
      </div>
      <div className="content">
        <div className="section">
          <h2>Skills</h2>
          <ul className="skills-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>ReactJS</li>
          </ul>
        </div>

        <div className="section">
          <h2>Experience</h2>
          <div className="experience">
            <h3>Company A</h3>
            <p className="job-position">Frontend Developer</p>
            <p className="job-duration">2019 - Present</p>
          </div>
        </div>

        <div className="section">
          <h2>Education</h2>
          <div className="education">
            <h3>University of XYZ</h3>
            <p className="education-degree">Bachelor of Science in Computer Science</p>
            <p className="education-duration">2015 - 2019</p>
          </div>
        </div>
      </div>

      <button className="print-button" onClick={handlePrint}>
        Print Resume
      </button>
    </div>
  );
};

export default Resume;
