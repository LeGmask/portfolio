import React, { Component } from "react";

class Logo extends Component {
  render() {
    return (
      <svg>
        <path
          d="M289.451 216.34l-18.107-54.329H158.157l54.33 54.329zm61.876-126.767L333.219 41.28H37.427L85.72 89.573zm-6.037 259.571h6.033l-18.108-54.329H290.96z"
          fill="#fff"
        ></path>
        <g fill="none" stroke="#fff" stroke-width="8">
          <rect width="400" height="399.245" rx="18" stroke="none"></rect>
          <rect x="4" y="4" width="392" height="391.245" rx="14"></rect>
        </g>
      </svg>
    );
  }
}

export default Logo;
