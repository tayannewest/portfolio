import React from "react";
import { useModal } from "react-hooks-use-modal";
import CustomButton from "../Widget/Widget";
import "../App/App.css"
import "./Contact.css"
import Form from "../Form/Form";

const Contact = () => {

  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
    closeOnOverlayClick: false
  })


  return (
    <div>
      <div className="contact">
        <div className="address">
            Message me:  
            <button onClick={open}>Click here!</button>
            <Modal>
              <div>
                <Form close={close}/>
                <button type="submit" className="submit" onClick={close}>Wait, no, take me back!</button>
              </div>
            </Modal>
            <br />
            Set up a meeting: <CustomButton />
            <br />
            See my experience: <a  href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1MeqHFGCsltH8sX5Giue024IBYjBj7RPrwDK55thUf1I/export?format=pdf" target="_blank" rel="noreferrer">Resume</a>
            <br />
            Connect with me:
            <a href="https://www.linkedin.com/in/tayannewest/" target="_blank" rel="noreferrer"> LinkedIn </a>
            <br />
            Check out my code: 
            <a href="https://github.com/tayannewest" target="_blank" rel="noreferrer"> GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default Contact