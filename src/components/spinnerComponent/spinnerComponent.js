// UncontrolledLottie.jsx
import React, { Component } from "react";
import Lottie from "react-lottie";
import spinner from "../../images/bodymovin-spinner-data.json";

class Spinner extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: spinner,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
      },
    };

    return <Lottie options={defaultOptions} height={400} width={400} />;
  }
}

export default Spinner;
