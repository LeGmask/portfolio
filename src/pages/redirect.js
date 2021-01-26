import React, { Component } from "react";
import { Redirect as RouterRedirect } from "react-router-dom";

import Spinner from "../components/spinnerComponent/spinnerComponent";

import "./sass/redirect.scss";

class Redirect extends Component {
  constructor(props) {
    super(props);

    this.state = { service: this.props.match.params.service, 404: false };
  }

  componentDidMount() {
    switch (this.state.service) {
      case "github":
        window.location.href = "https://github.com/legmask";
        break;

      case "twitter":
        window.location.href = "https://twitter.com/evann_drmt";
        break;

      case "stackoverflow":
        window.location.href =
          "https://stackoverflow.com/users/14726040/legmask";
        break;

      case "mail":
        window.location.href = "mailto:evann.dreumont@gmail.com";
        break;

      default:
        this.setState({ 404: true });
        break;
    }
  }
  render() {
    return this.state[404] ? (
      <RouterRedirect to="/404" />
    ) : (
      <div className="redirect">
        <div className="redirect__spinner">
          <Spinner />
        </div>
        <h1>Loading ...</h1>
      </div>
    );
  }
}

export default Redirect;
