import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Message } from "react-intl";

import BuiltWith from "../builtWith/builtWith";

import "./projectTile.scss";

class ProjectTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uri: this.props.uri,
      tags: this.props.tags,
      builtWith: this.props.builtWith,
      title: this.props.title,
      created: this.props.created,
      description: this.props.description,
      img: this.props.img,
    };
  }

  render() {
    return (
      <Link to={this.props.uri} className="project__tile">
        <div className="project__tile__main">
          <div className="project__tile__main__title">
            <h3>{this.state.title}</h3>
            <p>{this.state.created.substring(6)}</p>
          </div>
          <div className="project__tile__main__img">
            {this.state.img ? <img src={this.state.img} /> : ""}
          </div>
        </div>
        <div className="project__tile__description">
          <p>{this.state.description}</p>
        </div>
        <div className="project__tile__builtWith">
          <p>
            <Message
              id="home.projects.tile.builtWith"
              defaultMessage="Built with:"
            />
          </p>
          <BuiltWith
            builtWith={this.state.builtWith}
            className="project__tile__builtWith__icon"
          />
        </div>
      </Link>
    );
  }
}

export default ProjectTile;
