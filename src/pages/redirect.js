import React, { Component } from "react";
import { Redirect as RouterRedirect } from "react-router-dom";

import Loader from "../components/loader/loader";

import "./scss/redirect.scss";

class Redirect extends Component {
  constructor(props) {
    super(props);

    this.state = { service: this.props.match.params.service, 404: false };
  }

  componentDidMount() {
    switch (this.state.service) {
      case "github":
        window.location.href = "https://github.com/LeGmask";
        break;

      case "twitter":
        window.location.href = "https://twitter.com/evann_drmt";
        break;

      case "stackoverflow":
        window.location.href =
          "https://stackoverflow.com/users/14726040/legmask";
        break;

      case "mail":
        window.location.href = "mailto:hello@evann.tech";
        break;

      case "source":
        window.location.href = "https://github.com/LeGmask/portfolio";
        break;

      default:
        this.setState({ 404: true });
        break;
    }
  }
  render() {
    return this.state[404] ? <RouterRedirect to="/404" /> : <Loader />;
  }
}

export default Redirect;
