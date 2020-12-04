import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import logo from "../images/logo.svg";
import "../App.scss";

export default class notFound extends Component {
  constructor(props) {
    super(props);
    document.title = "404";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="notFound.404"
              defaultMessage="Bip, Bop, Bioup ? Vous vous êtes perdu ?"
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
