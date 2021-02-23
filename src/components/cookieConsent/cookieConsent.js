import React, { Component } from "react";
import { IoIosCloseCircle as Close } from "react-icons/io";
import cookie from "../../images/cookie.png";

import "./cookieConsent.scss";

class CookieConsent extends Component {
  constructor(props) {
    super(props);

    let consent = JSON.parse(localStorage.getItem("cookieConsent"));

    if (consent == null) {
      console.log("i'm here");
      consent = false;
      localStorage.setItem("cookieConsent", consent);
    }

    this.state = {
      active: !consent,
    };
    console.log(this.state.active);
    this.disable = this.disable.bind(this);
  }

  componentDidMount() {
    this.setState({
      timer: setTimeout(() => {
        this.disable();
      }, 120000),
    });
  }

  componentWillUnmount() {
    clearTimeout(this.state.timer);
  }

  disable() {
    localStorage.setItem("cookieConsent", true);
    this.setState({ active: false });
  }

  render() {
    if (this.state.active) {
      return (
        <div className="cookieConsent">
          <Close
            className="cookieConsent__control"
            onClick={this.disable.bind(this)}
          />
          <div className="cookieConsent__container">
            <div className="cookieConsent__icon">
              <img src={cookie} alt="Cookie" />
            </div>
            <div className="cookieConsent__content">
              <div className="cookieConsent__content__title">
                <h1>I use cookies</h1>
              </div>
              <div className="cookieConsent__content__description">
                <p>I love cookies, I hope you love them too.</p>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default CookieConsent;
