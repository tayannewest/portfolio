import React from "react";
import "./Work.css"

const Works = () => {
  return (
    <div className="all-work">
        <div className="work odd">
        <a href="http://renannymation.netlify.app" target="_blank" rel="noreferrer">ReNannyMation</a>
          <br />
          An unconventional babysitting simulator
          <br />
          Javascript | CSS | HTML
        </div>
        <div className="work even">
          <a href="http://lfgpls.herokuapp.com/" target="_blank" rel="noreferrer">Looking For Group</a>
          <br />
          A social app for the solo adventurer
          <br />
          ReactJs | Axios | Yelp Fusion
        </div>
        <div className="work odd">
        <a href="http://swatchdog.herokuapp.com/" target="_blank" rel="noreferrer">SwatchDog</a>
          <br />
          An online swatch library for artists    
          <br />
          Django | AWS S3 | PostgreSQL
        </div>
        <div className="work even">
          <a href="https://good-car-ideas.herokuapp.com/" target="_blank" rel="noreferrer">Focus Group</a>
          <br />
          An ode to Tim Robinson
          <br />
          EJS | MongoDB | Google OAuth
        </div>
        <div className="work odd">
          <a href="https://frankthedestro.netlify.app/" target="_blank" rel="noreferrer">Frank the Destro Digital Business Card</a>
          <br />
          A mobile contact card
          <br />
          Javascript | CSS | Procreate
        </div>
      </div>
  )
}

export default Works