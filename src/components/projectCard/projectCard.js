import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./projectCard.scss";

class ProjectCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uri: this.props.uri,
      tags: this.props.tags,
      builtWith: this.props.builtWith,
      title: this.props.title,
      description: this.props.description,
      created: this.props.created,
      img: this.props.img,
    };
  }
  render() {
    return (
      <div className="project__card">
        <Link to={this.props.uri}>
          <div className="project__card__container">
            <div className="project__card__image">
              {this.state.img ? <img src={this.state.img} /> : ""}
            </div>
            <div className="project__card__content">
              <div className="project__card__content__date">
                {this.state.created.substring(6)}
              </div>
              <div className="project__card__content__title">
                <h1>{this.state.title}</h1>
              </div>
              <div className="project__card__content__description">
                <p>{this.state.description}</p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default ProjectCard;
