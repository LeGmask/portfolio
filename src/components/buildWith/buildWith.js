import React, { Component } from "react";

import {
  DiCss3 as Css,
  DiHtml5 as Html,
  DiJsBadge as Js,
  DiMarkdown as Md,
  DiNodejsSmall as Nodejs,
  DiPhp as Php,
  DiPython as Python,
  DiReact as ReactI,
  DiRor as RubyOnRails,
  DiRuby as Ruby,
  DiRust as Rust,
  DiSass as Sass,
  DiPhotoshop as Photoshop,
} from "react-icons/di";
import { SiAmazonalexa as Alexa } from "react-icons/si";

class BuildWith extends Component {
  constructor(props) {
    super(props);

    this.state = {
      buildWith: this.props.buildWith,
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
        return <Python style={{ fill: "#ffffff" }} />;

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

      default:
        return null;
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.state.buildWith.map(
          (buildWith) =>
            /* <div className={this.props.className + "__icon"}> */
            this.generateIcon(buildWith)
          /* </div> */
          /* <div className={this.props.className + "__name"}>{buildWith}</div> */
        )}
      </div>
    );
  }
}

export default BuildWith;
