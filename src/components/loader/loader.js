import React, { Component } from "react";
import { FormattedMessage } from "react-intl";

import Spinner from "../spinnerComponent/spinnerComponent";

import "./loader.scss";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="loader__spinner">
          <Spinner />
        </div>
        <h1>
          <FormattedMessage id="loader.loading" defaultMessage="Loading ..." />
        </h1>
      </div>
    );
  }
}

export default Loader;
