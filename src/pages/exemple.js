import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

// import { ReactComponent as Logo } from "../images/logo.svg";
import "../App.scss";

import Spinner from "../components/spinnerComponent/spinnerComponent";

export default class exemple extends Component {
  constructor(props) {
    super(props);
    document.title = "Exemple";
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <Logo className="Logo" /> */}
          <Spinner />
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
          </a>{" "}
          or read my last <Link to="/blog/hello-world-nn2jbVfFS"> Article</Link>
        </header>
      </div>
    );
  }
}
