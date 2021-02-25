import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class ReactHelmet extends Component {
  constructor(props) {
    super(props);

    this.state = {
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
        {/* <!-- Primary Meta Tags --> */}
        <title>{this.props.title ? this.props.title : "Evann DREUMONT"}</title>
        <meta name="title" content="Evann DREUMONT" />
        <meta
          name="description"
          content={
            this.props.description
              ? this.props.description
              : "My personal portfolio/website"
          }
        />
        {this.props.author ? (
          <meta name="author" content={this.props.author} />
        ) : (
          ""
        )}
        {this.state.keywords}

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://evann.tech/" />
        <meta
          property="og:title"
          content={this.props.title ? this.props.title : "Evann DREUMONT"}
        />
        <meta
          property="og:description"
          content={
            this.props.description
              ? this.props.description
              : "My personal portfolio/website"
          }
        />
        <meta property="og:image" content="/metadata_full.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://evann.tech/" />
        <meta
          property="twitter:title"
          content={this.props.title ? this.props.title : "Evann DREUMONT"}
        />
        <meta
          property="twitter:description"
          content={
            this.props.description
              ? this.props.description
              : "My personal portfolio/website"
          }
        />
        <meta property="twitter:image" content="/metadata_full.png" />
      </Helmet>
    );
  }
}

export default ReactHelmet;
