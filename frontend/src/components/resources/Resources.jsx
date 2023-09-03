import React from "react";

import "./Resources.css";

function Resources() {
  return (
    <div className="resources">
      <span className="header">
        Documents <span className="headerPink">Available</span>
      </span>
      <div className="doc-boxes">
        <div className="doc-box">
          <p className="">Logos</p>
          <a href="">Visit</a>
        </div>
        <div className="doc-box">
          <p className="">Event Schedule</p>
          <a href="">Download</a>
        </div>
        <div className="doc-box">
          <p className="">Timeline</p>
          <a href="">Download</a>
        </div>
        <div className="doc-box">
          <p className="">Sponsorship's Brochure</p>
          <a href="">Download</a>
        </div>
        <div className="doc-box">
          <p className="">Guidelines for HP Team</p>
          <a href="">Download</a>
        </div>
        <div className="doc-box">
          <p className="">Guidelines for PPT</p>
          <a href="">Download</a>
        </div>
      </div>
    </div>
  );
}

export default Resources;
