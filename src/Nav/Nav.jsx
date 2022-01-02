import React from "react";
import { slide as Menu } from "react-burger-menu"
import "./Nav.css"
// import { Link } from "react-scroll"
import AnchorLink from "react-anchor-link-smooth-scroll";


const Nav = () => {

  return (
    <Menu right>
      <AnchorLink 
      href="#about" 
      className="menu-item">
        About Me
      </AnchorLink>
      <AnchorLink 
      href="#works" 
      className="menu-item">
        Recent Projects
      </AnchorLink>
      <AnchorLink 
      href="#skills" 
      className="menu-item">
        Skills and Technologies
      </AnchorLink>
      <AnchorLink 
      href="#contact" 
      className="menu-item">
        Contact
      </AnchorLink>
    </Menu>
  )
}

export default Nav