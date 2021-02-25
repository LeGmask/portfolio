import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./blogTile.scss";

class BlogTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: this.props.title,
      synopsis: this.props.synopsis,
      date: this.props.date,
      author: this.props.author,
      img: this.props.img,
      link: this.props.link,
    };
  }

  render() {
    return (
      <Link to={this.props.link} className="blog__tile">
        <div className="blog__tile__metadata">
          <span className="blog__tile__metadata__date">{this.state.date}</span>
          <span className="blog__tile_metadata__author">
            {this.state.author}
          </span>
        </div>
        <div className="blog__tile__img">
          {this.state.img ? <img src={this.state.img} /> : ""}
        </div>
        <div className="blog__tile__content">
          <div className="blog__tile__content__title">
            <h4>{this.state.title}</h4>
          </div>
          <div className="blog__tile__content__synopsis">
            {this.state.synopsis}
          </div>
        </div>
      </Link>
    );
  }
}

export default BlogTile;
