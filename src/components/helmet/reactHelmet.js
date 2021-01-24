import React, { Component } from "react";
import { Helmet } from "react-helmet";

class ReactHelmet extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title ? <title>{this.props.title}</title> : "",

      description: this.props.description ? (
        <meta name="description" content={this.props.description} />
      ) : (
        ""
      ),

      author: this.props.author ? (
        <meta name="author" content={this.props.author} />
      ) : (
        ""
      ),

      keyswords: this.props.keyswords ? (
        <meta name="keywords" content={this.props.keyswords.toString()} />
      ) : (
        ""
      ),
    };
  }

  render() {
    return (
      <Helmet>
        {this.state.title}
        {this.state.description}
        {this.state.keyswords}
        {this.props.children}
      </Helmet>
    );
  }
}

export default ReactHelmet;
