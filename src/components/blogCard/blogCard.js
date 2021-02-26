import React, { Component } from "react";
import PropTypes from "prop-types";
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
      date: this.props.date,
      img: this.props.img,
      link: this.props.link,
    };
  }
  render() {
    return (
      <Link to={this.state.link} className="card">
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
        <div className="card__control">
          <div className="card__control__date">
            {this.state.date ? this.state.date : ""}
          </div>
        </div>
      </Link>
    );
  }
}

BlogCard.propTypes = {
  title: PropTypes.string,
  synopsis: PropTypes.string,
  date: PropTypes.string,
  img: PropTypes.string,
  link: PropTypes.string,
};

export default BlogCard;
