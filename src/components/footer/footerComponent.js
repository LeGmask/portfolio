import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";
import { NavLink } from "react-router-dom";

import translations from "../../i18n/locales";

import {
  FaGithub as GithubIcon,
  FaTwitter as TwitterIcon,
  FaStackOverflow as StackOverflowIcon,
} from "react-icons/fa";
import { SiMinutemailer as MailIcon } from "react-icons/si";

import "./footerComponent.scss";

import { ReactComponent as Logo } from "../../images/logo_small.svg";
import { ReactComponent as Separator } from "../../images/footer__separator.svg";

class Footer extends Component {
  constructor(props) {
    super(props);

    this.changeLang = props.onChangeLanguage;

    this.state = {
      locale: props.locale,
      localeDropdown: false,
    };

    this.setLanguage = this.setLanguage.bind(this);
    this.onClickOverlay = this.onClickOverlay.bind(this);
  }

  setLanguage(lang) {
    this.setState({
      locale: lang,
      localeDropdown: false,
    });
    this.changeLang(lang);
  }

  onClickOverlay() {
    this.setState({ localeDropdown: false });
  }

  render() {
    var langs_list = [];
    for (let lang in translations) {
      langs_list.push(
        <div
          onClick={() => this.setLanguage(lang)}
          className="footer__locale__dropdown__item"
        >
          {translations[lang]["footer.language"]}{" "}
          {translations[lang]["footer.flag"]}
        </div>
      );
    }
    let messages = {
      i18n: {
        language: <Message id="footer.language" defaultMessage="English" />,
        flag: <Message id="footer.flag" defaultMessage="🇺🇸" />,
      },
      home: <Message id="link.nav.home" defaultMessage="Home" />,
      projects: <Message id="link.nav.projects" defaultMessage="Projects" />,
      blog: <Message id="link.nav.blog" defaultMessage="Blog" />,
      about: <Message id="link.nav.about" defaultMessage="About" />,
      contact: <Message id="link.nav.contact" defaultMessage="Contact" />,
      credits: <Message id="link.nav.credits" defaultMessage="Credits" />,
    };
    return (
      <footer className="footer">
        <Separator className="footer__separator" />
        <div className="footer__content">
          <div className="footer__content__me">
            <Logo className="logo" />
            <span className="name">Evann DREUMONT</span>
          </div>
          <div className="footer__content__social">
            <a href="https://github.com/legmask" target="_blank">
              <GithubIcon className="footer__icon" />
            </a>
            <a
              href="https://stackoverflow.com/users/14726040/legmask"
              target="_blank"
            >
              <StackOverflowIcon className="footer__icon" />
            </a>
            <a href="https://twitter.com/evann_drmt" target="_blank">
              <TwitterIcon className="footer__icon" />
            </a>
            <a href="mailto:evann.dreumont@gmail.com" target="_blank">
              <MailIcon className="footer__icon" />
            </a>
          </div>
        </div>
        <div className="footer__lang">
          <div
            className={
              "footer__locale " +
              (this.state.localeDropdown ? "footer__locale-active" : "")
            }
            onClick={() =>
              this.setState({ localeDropdown: !this.state.localeDropdown })
            }
          >
            {translations[this.state.locale]["footer.language"]}{" "}
            {translations[this.state.locale]["footer.flag"]}
            <div
              className={
                "footer__locale__dropdown " +
                (this.state.localeDropdown
                  ? "footer__locale__dropdown-show"
                  : "")
              }
            >
              {langs_list}
            </div>
          </div>
        </div>
        <div className="footer__copyright">
          <div className="footer__copyright__container">
            <div>
              <Message
                id="footer.copyright.build"
                defaultMessage="Made with love by myself"
              />
            </div>
            <div>
              <span className="notAtAll">
                <Message
                  id="footer.copyright.notAtAll"
                  defaultMessage="Not at all "
                />
              </span>{" "}
              <Message
                id="footer.copyright.wordpress"
                defaultMessage="powered by WordPress"
              />
            </div>
            <div>© 2020 ‒ Evann "LeGmask" DREUMONT</div>
          </div>
        </div>
        <div className="footer__nav">
          <div>
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              exact
              to="/"
            >
              {messages.home}
            </NavLink>
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
          <div>
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
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link__selected"
              strict
              to="/credits/"
            >
              {messages.credits}
            </NavLink>
          </div>
        </div>
        <div className="footer__works__licence">
          <div className="footer__works__licence__code">
            <code>
              <span style={{ color: "#F7CB4A" }}>for</span>{" "}
              <span style={{ color: "#ECEFF4" }}>(</span>
              <span style={{ color: "#EB515F" }}>work</span>{" "}
              <span style={{ color: "#F7CB4A" }}>in</span>{" "}
              <span style={{ color: "#EB515F" }}>works</span>
              <span style={{ color: "#ECEFF4" }}>)</span>{" "}
              <span style={{ color: "#ECEFF4" }}>{"{"}</span>
              <br />
              <span style={{ color: "#EB515F", marginLeft: "35px" }}>work</span>
              <span style={{ color: "#ECEFF4" }}>.</span>
              <span style={{ color: "#3599D6" }}>addAuthor</span>
              <span style={{ color: "#ECEFF4" }}>(</span>
              <span style={{ color: "#26B777" }}>"Evann"</span>
              <span style={{ color: "#ECEFF4" }}>)</span>
              <span style={{ color: "#D8DEE9" }}>;</span>
              <br />
              <span style={{ color: "#EB515F", marginLeft: "35px" }}>work</span>
              <span style={{ color: "#ECEFF4" }}>.</span>
              <span style={{ color: "#3599D6" }}>addLicence</span>
              <span style={{ color: "#ECEFF4" }}>(</span>
              <span style={{ color: "#26B777" }}>"MIT"</span>
              <span style={{ color: "#ECEFF4" }}>)</span>
              <span style={{ color: "#D8DEE9" }}>;</span>
              <br />
              <span style={{ color: "#ECEFF4" }}>{"}"}</span>
            </code>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
