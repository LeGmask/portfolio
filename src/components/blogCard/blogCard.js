import React, { Component } from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import { IoReaderOutline as Read } from "react-icons/io5";

import "./blogCard.scss";

class BlogCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      synopsis: this.props.synopsis,
      img: this.props.img,
      link: this.props.link,
    };
  }
  render() {
    return (
      <div className="card">
        <div className="card__content">
          <div className="card__content__metadata">
            <div className="card__content__metadata__title">
              <h1>
                <Link to={this.state.link}>{this.state.title}</Link>
              </h1>
            </div>
            <div className="card__content__metadata__synopsis">
              <p>{this.state.synopsis}</p>
            </div>
          </div>
          <div className="card__content__image">
            {this.state.img ? <img src={this.state.img} /> : ""}
          </div>
        </div>
        <div className="card__control">
          <Link to={this.state.link}>
            <button>
              <Read />
              <FormattedMessage id="Blog.read" defaultMessage="Read" />
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

BlogCard.propTypes = {
  title: propTypes.string,
  synopsis: propTypes.synopsis,
  img: propTypes.string,
  link: propTypes.string,
};

export default BlogCard;
