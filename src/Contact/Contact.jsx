import React from "react";
import "../App/App.css"
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="blurb">
        Thinking of working with me? Want to collaborate on a project? Have general feedback? You can get in touch with me here!
        </div>
        <div className="address">
            Email me: 
            <a href="mailto:tayanne.west@gmail.com"> Email </a>
            <br />
            See my experience: <a href="https://docs.google.com/document/d/1MeqHFGCsltH8sX5Giue024IBYjBj7RPrwDK55thUf1I/edit?usp=sharing">Resume</a>
            <br />
            Connect with me:
            <a href="https://www.linkedin.com/in/tayannewest/"> LinkedIn </a>
            <br />
            Check out my code:
            <a href="https://github.com/tayannewest">GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact