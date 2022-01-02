import React from "react";
import "./Skills.css"
import js from "../Images/JavaScript-01.svg"
import css from "../Images/CSS-3-01.svg"
import html from "../Images/HTML-5-01.svg"
import node from "../Images/Node-JS-02.svg"
import python from "../Images/Python-04.svg"
import django from "../Images/Django-03.svg"
import mongoDB from "../Images/mongodb-icon.svg"
import axios from "../Images/axios_logo_icon_168545.svg"
import github from "../Images/github-tile.svg"


const Skills = () => {
  return (
    <div className="skills">
      <div className="logo">
        <img src={js} alt="js logo" className="skill-logo"/>
        <h3>JavaScript</h3>
      </div>
      <div className="logo">
        <img src={css} alt="css logo" className="skill-logo"/>
        <h3>CSS</h3>
      </div>
      <div className="logo">
        <img src={html} alt="html logo" className="skill-logo"/>
        <h3>HTML 5</h3>
      </div>
      <div className="logo">
        <img src={node} alt="node logo" className="skill-logo"/>
        <h3>Node JS</h3>
      </div>
      <div className="logo">
        <img src={python} alt="python logo" className="skill-logo"/>
        <h3>Python</h3>
      </div>
      <div className="logo">
        <img src={django} alt="django logo" className="skill-logo"/>
        <h3>Django</h3>
      </div>
      <div className="logo">
        <img src={mongoDB} alt="mongoDB logo" className="skill-logo"/>
        <h3>MongoDB</h3>
      </div>
      <div className="logo">
        <img src={axios} alt="axios logo" className="skill-logo"/>
        <h3>Axios</h3>
      </div>
      <div className="logo">
        <img src={github} alt="github logo" className="skill-logo"/>
        <h3>GitHub</h3>
      </div>
    </div>
  )
}

export default Skills