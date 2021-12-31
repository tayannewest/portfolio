import React from "react";
import "./Work.css"

const Works = () => {
  return (
      <div className="all-work">
        <div className="work odd">
          <a href="http://swatchdog.herokuapp.com/">SwatchDog</a>
          A work example
        </div>
        <div className="work even">
          <a href="http://lfgpls.herokuapp.com/">Looking For Group</a>
          A work example
        </div>
        <div className="work odd">
          <a href="http://renannymation.netlify.app">ReNannyMation</a>
          A work example
        </div>
        <div className="work even">
          <a href="https://good-car-ideas.herokuapp.com/">Focus Group</a>
          A work example
        </div>
        <div className="work odd">
          A work example
        </div>
      </div>
  )
}

export default Works