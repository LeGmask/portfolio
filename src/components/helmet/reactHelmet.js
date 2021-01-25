import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

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

      keywords: this.props.keywords ? (
        <meta name="keywords" content={this.props.keywords.toString()} />
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
        {this.state.keywords}
        {this.props.children}
      </Helmet>
    );
  }
}

export default ReactHelmet;
