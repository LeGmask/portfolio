import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import ReactHelmet from "../components/helmet/reactHelmet";
import Beadcrumb from "../components/helmet/beadcrumb";

import translations from "../i18n/locales";

import logo from "../images/logo.svg";
import "../App.scss";

export default class NotFound extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: props.locale,
    };
  }

  render() {
    return (
      <div className="App">
        <ReactHelmet
          title={translations[this.state.locale]["notFound.title"]}
          description={translations[this.state.locale]["notFound.description"]}
          keywords={["notfound", "404", "non trouvé"]}
        />
        <Beadcrumb
          path={window.location.pathname}
          origin={window.location.origin}
        />
        <header className="App-header">
          <h1>
            <FormattedMessage id="notFound.title" defaultMessage="404" />
          </h1>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="notFound.description"
              defaultMessage="Oh no, look like the page requested doesn't exist"
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
