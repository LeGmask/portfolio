import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";
import { NavLink } from "react-router-dom";

import "./header.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      shadow: "",
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
        shadow: "header__shadow",
      });
    } else {
      this.setState({
        shadow: "",
      });
    }
  }

  render() {
    let messages = {
      projects: <Message id="link.nav.projects" defaultMessage="Projects" />,
      blog: <Message id="link.nav.blog" defaultMessage="Blog" />,
      about: <Message id="link.nav.about" defaultMessage="About" />,
      contact: <Message id="link.nav.contact" defaultMessage="Contact" />,
    };
    return (
      <div className={`header__navbar ${this.state.shadow}`}>
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
