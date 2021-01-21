import React, { Component } from "react";
import propTypes from "prop-types";

import "./blogCard.scss";

class BlogCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      synopsis: this.props.synopsis,
      img: this.props.img,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content__metadata">
            <div className="card__content__metadata__title">
              <h1>{this.state.title}</h1>
            </div>
            <div className="card__content__metadata__synopsis">
              <p>{this.state.synopsis}</p>
            </div>
          </div>
          <div className="card__content__image">
            {this.state.img ? <img src={this.state.img} /> : ""}
          </div>
        </div>
      </div>
    );
  }
}

BlogCard.propTypes = {
  title: propTypes.string,
  synopsis: propTypes.synopsis,
  img: propTypes.string,
};

export default BlogCard;
