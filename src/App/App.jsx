import React from "react";
import "./App.css"
import About from "../About/About";
import Works from "../Works/Works";
import Contact from "../Contact/Contact";

const App = () => {
  return (
    <div>
      <div className="header">
      <h2>Hello it's me Tay and wow I'm doing my little best over here</h2>
        <h3>I do programmer things</h3>
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