import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { Link, useLocation } from "react-router-dom";

// import { ReactComponent as Logo } from "../images/logo.svg";
import "../App.scss";
import Beadcrumb from "../components/helmet/beadcrumb";

import ReactHelmet from "../components/helmet/reactHelmet";
import Spinner from "../components/spinnerComponent/spinnerComponent";

export default class exemple extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(window.location.pathname);
    return (
      <div className="App">
        <ReactHelmet
          title="Exemple"
          description="An exemple page"
          keywords={["Exemple", "test"]}
        />
        <Beadcrumb path={window.location.pathname} />
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
