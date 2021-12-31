import React from "react";
import "./App.css"
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

import me from "../Images/tay.png"

import TypeAnimation from "react-type-animation"

const App = () => {
  return (
    <div>
      <div className="header">
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
              /></h3>
          </div>
      <div className="sprite">
        <img src={me} alt="my sprite" />
      </div>
      </div>
      <div>
        <About />
      </div>
      <div>
        <Works />
      </div>
      <div>
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App