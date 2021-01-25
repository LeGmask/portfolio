import React, { Component } from "react";
import { Helmet } from "react-helmet-async";

class Beadcrumb extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: this.splitPath(this.props.path),
    };

    this.getPreviousPath = this.getPreviousPath.bind(this);
  }

  splitPath(path) {
    if (path.length > 1) {
      return path.substring(1, path.length - 1).split("/");
    } else {
      return null;
    }
  }

  getPreviousPath(path, index) {
    let response = "";
    for (let i in path) {
      if (i < index) {
        response = response + `${path[i]}/`;
      }
    }
    return response;
  }

  render() {
    console.log(this.props.path);
    if (this.state.path) {
      let itemListElements = this.state.path.map(
        function (value, index) {
          return {
            "@type": "ListItem",
            position: index + 1,
            name: value,
            item: `${origin}/${this.getPreviousPath(
              this.state.path,
              index
            )}${value}/`,
          };
        }.bind(this)
      );

      return (
        <Helmet>
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "BreadcrumbList",
              itemListElement: itemListElements,
            })}
          </script>
        </Helmet>
      );
    } else {
      return null;
    }
  }
}

export default Beadcrumb;
