import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Markdown from "../components/markdownComponent/markdownComponent";

import postList from "../content/blog/postList.json";

import "./sass/blog.scss";

function getPost(url) {
  let article = null;
  postList.forEach((post) => {
    if (url === post.id) {
      article = post;
    }
  });
  return article;
}

class Blog extends Component {
  constructor(props) {
    super(props);

    this.post = getPost(this.props.postId);

    try {
      content = require(`../${this.post.file}`);
    } catch (error) {
      content = "No content";
    }

    if (this.post) {
      this.state = {
        url: this.props.postId,
        id: this.post.id ? this.post.id : "No id",
        title: this.post.name[props.locale]
          ? this.post.name[props.locale]
          : "No name",
        date: this.post.date ? this.post.date : "No date",
        author: this.post.author ? this.post.author : "No author",
        content: content.content[props.locale]
          ? content.content[props.locale]
          : "No content",
      };

      document.title = this.state.title;
    }
  }

  render() {
    let content = this.post ? (
      <div className="blog__article">
        <h2>{this.state.title}</h2>
        <small>
          Published on {this.state.date} by {this.state.author}
        </small>
        <hr />
        <Markdown>{this.state.content}</Markdown>
      </div>
    ) : (
      <Redirect to="/404" />
    ); // return 404 if post doesn't exists
    return <div className="blog">{content}</div>;
  }
}

export default Blog;
