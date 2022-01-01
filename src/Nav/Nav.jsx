import React from "react";
import { slide as Menu } from "react-burger-menu"
import "./Nav.css"
import { Link } from "react-scroll"


const Nav = () => {

  return (
    <Menu right>
      <Link 
      smooth={true}
      to="about" 
      className="menu-item">
        About Me
      </Link>
      <Link 
      smooth={true}
      to="works" 
      className="menu-item">
        Recent Projects
      </Link>
      <Link 
      smooth={true}
      to="contact" 
      className="menu-item">
        Contact
      </Link>
    </Menu>
  )
}

export default Nav