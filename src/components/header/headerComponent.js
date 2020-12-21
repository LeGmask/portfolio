import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";
import { NavLink } from "react-router-dom";

import "./headerComponent.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shadow: "none",
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll.bind(this));
  }

  handleScroll(event) {
    let scrollTop = event.target.scrollingElement.scrollTop;
    if (scrollTop != 0) {
      this.setState({
        shadow: "0 1px 4px rgba(0, 0, 0, 0.15)",
      });
    } else {
      this.setState({
        shadow: "none",
      });
    }
  }

  render() {
    let messages = {
      projects: (
        <Message id="header.navbar.projects" defaultMessage="Projects" />
      ),
      blog: <Message id="header.navbar.blog" defaultMessage="Blog" />,
      about: <Message id="header.navbar.about" defaultMessage="About" />,
      contact: <Message id="header.navbar.contact" defaultMessage="contact" />,
    };
    return (
      <div
        className="header__navbar"
        style={{ boxShadow: this.state.shadow, transition: "all 0.3s" }}
      >
        <nav>
          <div className="navbar__container">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              strict
              to="/projects/"
            >
              {messages.projects}
            </NavLink>
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              strict
              to="/blog/"
            >
              {messages.blog}
            </NavLink>
          </div>
          <div className="navbar__container">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              exact
              to="/"
            >
              Evann DREUMONT
            </NavLink>
          </div>
          <div className="navbar__container">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              strict
              to="/about/"
            >
              {messages.about}
            </NavLink>
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              strict
              to="/contact/"
            >
              {messages.contact}
            </NavLink>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;