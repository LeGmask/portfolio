import React, { Component } from "react";

import {
  DiCss3 as Css,
  DiHtml5 as Html,
  DiJsBadge as Js,
  DiMarkdown as Md,
  DiNodejsSmall as Nodejs,
  DiPhp as Php,
  DiReact as ReactI,
  DiRor as RubyOnRails,
  DiRuby as Ruby,
  DiRust as Rust,
  DiSass as Sass,
  DiPhotoshop as Photoshop,
} from "react-icons/di";
import { SiAmazonalexa as Alexa } from "react-icons/si";

class BuiltWith extends Component {
  constructor(props) {
    super(props);

    this.state = {
      builtWith: this.props.builtWith,
    };

    this.generateIcon = this.generateIcon.bind(this);
  }

  generateIcon(what) {
    switch (what.toLowerCase()) {
      case "css":
        return <Css style={{ fill: "#264de4" }} />;

      case "html":
        return <Html style={{ fill: "#f16529" }} />;

      case "html":
        return <Html style={{ fill: "#f16529" }} />;

      case "js":
        return <Js style={{ fill: "#efd81d" }} />;

      case "md":
        return <Md style={{ fill: "#ffffff" }} />;

      case "nodejs":
        return <Nodejs style={{ fill: "#509941" }} />;

      case "php":
        return <Php style={{ fill: "#8993be" }} />;

      case "python":
        return (
          <svg viewBox="0 0 128 128">
            <linearGradient
              id="a"
              gradientUnits="userSpaceOnUse"
              x1="70.252"
              y1="1237.476"
              x2="170.659"
              y2="1151.089"
              gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
            >
              <stop offset="0" stop-color="#5A9FD4"></stop>
              <stop offset="1" stop-color="#306998"></stop>
            </linearGradient>
            <path
              fill="url(#a)"
              d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137h-33.961c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491v-11.282c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548v-23.513c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zm-13.354 7.569c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"
            ></path>
            <linearGradient
              id="b"
              gradientUnits="userSpaceOnUse"
              x1="209.474"
              y1="1098.811"
              x2="173.62"
              y2="1149.537"
              gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"
            >
              <stop offset="0" stop-color="#FFD43B"></stop>
              <stop offset="1" stop-color="#FFE873"></stop>
            </linearGradient>
            <path
              fill="url(#b)"
              d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655h-24.665c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412h-24.664v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zm-13.873 59.547c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"
            ></path>
            <radialGradient
              id="c"
              cx="1825.678"
              cy="444.45"
              r="26.743"
              gradientTransform="matrix(0 -.24 -1.055 0 532.979 557.576)"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0" stop-color="#B8B8B8" stop-opacity=".498"></stop>
              <stop offset="1" stop-color="#7F7F7F" stop-opacity="0"></stop>
            </radialGradient>
            <path
              opacity=".444"
              fill="url(#c)"
              enable-background="new"
              d="M97.309 119.597c0 3.543-14.816 6.416-33.091 6.416-18.276 0-33.092-2.873-33.092-6.416 0-3.544 14.815-6.417 33.092-6.417 18.275 0 33.091 2.872 33.091 6.417z"
            ></path>
          </svg>
        );

      case "react":
        return <ReactI style={{ fill: "#5ed3f3" }} />;

      case "rubyonrails":
        return <RubyOnRails style={{ fill: "#c60000" }} />;

      case "ruby":
        return <Ruby style={{ fill: "#d21304" }} />;

      case "rust":
        return <Rust style={{ fill: "#000000" }} />;

      case "sass":
        return <Sass style={{ fill: "#c96195" }} />;

      case "photoshop":
        return <Photoshop style={{ fill: "#31a2f4" }} />;

      case "alexa":
        return <Alexa style={{ fill: "#02c4f6" }} />;

      case "c":
        return (
          <svg viewBox="0 0 128 128">
            <g>
              <path
                fill="#659AD3"
                d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#03599C"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
            </g>
          </svg>
        );

      case "cpp":
        return (
          <svg viewBox="0 0 128 128">
            <g>
              <path
                fill="#659AD3"
                d="M115.4 30.7l-48.3-27.8c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"
              ></path>
              <path
                fill="#03599C"
                d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4v-55.7c0-.9-.1-1.9-.6-2.8l-106.6 62z"
              ></path>
              <path
                fill="#fff"
                d="M85.3 76.1c-4.2 7.4-12.2 12.4-21.3 12.4-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"
              ></path>
              <g fill="#fff">
                <path d="M82.1 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4zM100.6 61.8h5.2v-5.3h4.4v5.3h5.3v4.4h-5.3v5.2h-4.4v-5.2h-5.2v-4.4z"></path>
              </g>
            </g>
          </svg>
        );
      default:
        return null;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.builtWith.map(
          (builtWith) =>
            /* <div className={this.props.className + "__icon"}> */
            this.generateIcon(builtWith)
          /* </div> */
          /* <div className={this.props.className + "__name"}>{builtWith}</div> */
        )}
      </div>
    );
  }
}

export default BuiltWith;
