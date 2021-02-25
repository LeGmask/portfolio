import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";
import { Link } from "react-router-dom";

import "./scss/credits.scss";

class Credits extends Component {
  render() {
    return (
      <div className="credits">
        <h1>
          <Message id="credits.title" defaultMessage="Thanks to:" />
        </h1>
        <ul>
          <li className="credits__item">
            <h3>
              <a href="https://github.com/googlefonts/Rubik" target="_blank">
                Rubik
              </a>
              <Message
                id="credits.font"
                defaultMessage=", a beautiful Open Font License typeface."
              />
            </h3>
          </li>
          <li className="credits__item">
            <h3>
              <a href="https://fr.gravatar.com/" target="_blank">
                Gravatar
              </a>
              <Message
                id="credits.gravatar"
                defaultMessage=", a web service for profile picture hosting."
              />
            </h3>
          </li>
          <li className="credits__item">
            <h3>
              <a href="https://imgur.com/" target="_blank">
                imgur
              </a>
              <Message
                id="credits.imgur"
                defaultMessage=", a web service for images hosting."
              />
            </h3>
          </li>
          <li className="credits__item">
            <h3>
              Nord
              <Message id="credits.nord" defaultMessage=", a color scheme." />
            </h3>
          </li>
          <li className="credits__item">
            <h3>
              <a href="https://vercel.com/" target="_blank">
                Vercel
              </a>

              <Message
                id="credits.vercel"
                defaultMessage=", for website hosting."
              />
            </h3>
          </li>
          <li className="credits__item">
            <h3>
              <a href="https://vercel.com/" target="_blank">
                NodeJS
              </a>{" "}
              &{" "}
              <a href="https://vercel.com/" target="_blank">
                React
              </a>
              <Message
                id="credits.builtWith"
                defaultMessage=", an efficient and comfortable programming language."
              />
            </h3>
          </li>
        </ul>
        <div className="credits__ownMade">
          <Link to="/to/source">
            <h3>Built myself by hand with love</h3>
          </Link>
        </div>
      </div>
    );
  }
}

export default Credits;
