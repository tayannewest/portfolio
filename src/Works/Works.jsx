import React from "react";
import "./Work.css"

const Works = () => {
  return (
      <div className="all-work">
        <div className="work odd">
          <a href="http://swatchdog.herokuapp.com/">SwatchDog</a>
          An online swatch library for artists <br />
          Django | AWS S3 | PostgreSQL
        </div>
        <div className="work even">
          <a href="http://lfgpls.herokuapp.com/">Looking For Group</a>
          A social app for the solo adventurer
          <br />
          ReactJs | Axios | Yelp Fusion
        </div>
        <div className="work odd">
          <a href="http://renannymation.netlify.app">ReNannyMation</a>
          An unconventional babysitting simulator
          <br />
          Javascript | CSS | HTML
        </div>
        <div className="work even">
          <a href="https://good-car-ideas.herokuapp.com/">Focus Group</a>
          An ode to Tim Robinson
          <br />
          EJS | Mongoose | MongoDB
        </div>
        <div className="work odd">
          A work example
        </div>
      </div>
  )
}

export default Works