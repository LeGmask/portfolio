import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";
import { Link } from "react-router-dom";

import {
  FaDiscord as DiscordIcon,
  FaTwitter as TwitterIcon,
} from "react-icons/fa";
import { SiMinutemailer as MailIcon } from "react-icons/si";

import "./scss/contact.scss";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      discordId: "LeGmask#1968",
      popup: false,
    };
  }

  handlePopup() {
    this.setState({ popup: false });
  }

  handleCopy() {
    navigator.clipboard.writeText(this.state.discordId);
    console.log("ok");
    this.setState({ popup: "Copié" });
    setTimeout(() => {
      this.handlePopup();
    }, 2000);
  }

  render() {
    return (
      <div className="contact">
        <div className="contact__page">
          <div className="contact__page__title">
            <h1>
              <Message id="link.nav.contact" defaultMessage="Contact" />
            </h1>
          </div>
          <div className="contact__page__description">
            <Message
              id="contact.description"
              defaultMessage="How to reach me :"
            />
          </div>
        </div>
        <div className="contact__container">
          <div className="contact__container__top">
            <div className="contact__card">
              <div className="contact__card__column">
                <div className="contact__card__link">
                  <Link to="/to/mail" target="_blank">
                    <MailIcon className="contact__icon contact__icon__active" />
                  </Link>
                </div>

                <div className="contact__card__description">
                  <Message id="contact.mail" defaultMessage="Send me a mail" />
                </div>
              </div>
            </div>
            <div className="contact__card">
              <div className="contact__card__column">
                <div className="contact__card__link">
                  <Link to="/to/twitter" target="_blank">
                    <TwitterIcon className="contact__icon contact__icon__active" />
                  </Link>
                </div>
                <div className="contact__card__description">
                  <Message
                    id="contact.twitter"
                    defaultMessage="Slide into my twitter dms"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="contact__container__down">
            <div className="contact__card">
              <div className="contact__card__row">
                <div className="contact__card__link">
                  <DiscordIcon className="contact__icon" />
                </div>
                <div className="contact__card__description">
                  <Message
                    id="contact.discord"
                    defaultMessage="Or through discord using my ID : "
                  />
                  <span
                    className={`contact__card__copy ${
                      this.state.popup ? "contact__card__copy__active" : ""
                    }`}
                    onClick={this.handleCopy.bind(this)}
                  >
                    {this.state.popup ? this.state.popup : this.state.discordId}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
