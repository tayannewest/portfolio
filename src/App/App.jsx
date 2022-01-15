import React from "react";
import "./App.css"
import Nav from "../Nav/Nav";
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Footer from "../Footer/Footer";

import me from "../Images/tay.png"

import TypeAnimation from "react-type-animation"

const App = () => {

  return (
    <div>
      <div className="header" id="outer-container">
        <Nav pageWrapId={"page-wrap"} outerContainerId={"outer-container"} />
        <div id="page-wrap">
          <div className="name">
            <h1 className="tay">Tay West</h1>
              <h3 className="typing">
                <TypeAnimation
                cursor={true}
                sequence={[
                  "software developer",
                  2200,
                  "visual designer",
                  2200,
                  "front-end fanatic",
                  2200,
                  "eight-foot vertical leap",
                  2000,
                  "video game enthusiast",
                  2200,
                ]}
                repeat={Infinity}
                />
              </h3>
                <div className="sprite">
                  <img src={me} alt="my sprite" />
                </div>
          </div>
        </div>
      </div>
        <div>
          <h2 id="about">Welcome in!</h2>
          <About />
        </div>
        <div>
          <h2  id="works">Check out some of my most recent projects
          </h2>
          <Works />
        </div>
        <div>
          <h2  id="skills">
          I have a particular set of skills...
          </h2>
          <Skills />
        </div>
        <div>
          <h2  id="contact">
          Thinking of working with me? Want to collaborate on a project? Have general feedback? You can get in touch with me here!
          </h2>
          <Contact />
        </div>
        <div>
          <Footer />
        </div>
      </div>
  )
}

export default App