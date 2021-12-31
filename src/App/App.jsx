import React from "react";
import "./App.css"
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

import TypeAnimation from "react-type-animation"

const App = () => {
  return (
    <div>
      <div className="header">
      <h1>Tay West</h1>
        <h3 className="typing">
          <TypeAnimation
          cursor={true}
          sequence={[
            " software developer",
            2500,
            " visual designer",
            2500,
            " big nerd",
            2500,
          ]}
          repeat={Infinity}
          /></h3>
          <h2>Hello it's me Tay and wow I'm doing my little best over here</h2>
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
    </div>
  )
}

export default App