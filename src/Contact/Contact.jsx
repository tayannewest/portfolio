import React from "react";
import "../App/App.css"
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="contact">
        <div className="address">
            Email me: 
            <a href="mailto:tayanne.west@gmail.com"> Email </a>
            <br />
            See my experience: <a href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1MeqHFGCsltH8sX5Giue024IBYjBj7RPrwDK55thUf1I/export?format=pdf">Resume</a>
            <br />
            Connect with me:
            <a href="https://www.linkedin.com/in/tayannewest/"> LinkedIn </a>
            <br />
            Check out my code: 
            <a href="https://github.com/tayannewest"> GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact