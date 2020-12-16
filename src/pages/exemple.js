import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import logo from "../images/logo.svg";
import "../App.scss";

import MDXDocument, { metadata } from "../content/helloWorld.en.mdx";

export default class exemple extends Component {
  constructor(props) {
    super(props);
    document.title = "Exemple";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="Home.welcome"
              defaultMessage="Edit <code>src/App.js</code> and save to reload."
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
          <MDXDocument />
          <footer>
            <p>By: {metadata.Author}</p>
          </footer>
        </header>
      </div>
    );
  }
}
