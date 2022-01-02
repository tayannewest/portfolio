import React from "react";
import { slide as Menu } from "react-burger-menu"
import "./Nav.css"
// import { Link } from "react-scroll"
import AnchorLink from "react-anchor-link-smooth-scroll";

class Nav extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      menuOpen: false
    }
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})  
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  toggleMenu () {
    this.setState(state => ({menuOpen: !state.menuOpen}))
  }

  render () {

    return (
      <Menu 
        right
        isOpen={this.state.menuOpen}
        onStateChange={(state) => this.handleStateChange(state)}>
        <AnchorLink 
        href="#about" 
        className="menu-item"
        onClick={() => this.closeMenu()}
        >
          About Me
        </AnchorLink>
        <AnchorLink 
        href="#works" 
        className="menu-item"
        onClick={() => this.closeMenu()}>
          Recent Projects
        </AnchorLink>
        <AnchorLink 
        href="#skills" 
        className="menu-item"
        onClick={() => this.closeMenu()}>
          Skills and Technologies
        </AnchorLink>
        <AnchorLink 
        href="#contact" 
        className="menu-item"
        onClick={() => this.closeMenu()}>
          Contact
        </AnchorLink>
      </Menu>
    )
  }
}

export default Nav