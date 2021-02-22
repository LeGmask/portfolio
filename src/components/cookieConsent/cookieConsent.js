import React, { Component } from "react";
import { IoIosCloseCircle as Close } from "react-icons/io";
import cookie from "../../images/cookie.png";

import "./cookieConsent.scss";

class CookieConsent extends Component {
  render() {
    return (
      <div className="cookieConsent">
        <Close className="cookieConsent__control" />
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
  }
}

export default CookieConsent;
