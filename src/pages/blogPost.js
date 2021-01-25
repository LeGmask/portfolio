import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Markdown from "../components/markdownComponent/markdownComponent";
import ReactHelmet from "../components/helmet/reactHelmet";
import Beadcrumb from "../components/helmet/beadcrumb";

import postList from "../content/blog/postList.json";

import "./sass/blogPost.scss";

function getPost(url) {
  let article = null;
  postList.forEach((post) => {
    if (url === post.id) {
      article = post;
    }
  });
  return article;
}

class BlogPost extends Component {
  constructor(props) {
    super(props);
    var lang = props.locale;
    var content = "No content";

    this.post = getPost(this.props.postId);

    try {
      content = require(`../${this.post.file}`);
    } catch (error) {
      content = "No content";
    }

    if (this.post) {
      if (!this.post.lang.includes(props.locale)) {
        lang = this.post.lang[0];
      }

      this.state = {
        url: this.props.postId,
        id: this.post.id ? this.post.id : "No id",
        title: this.post.name[lang] ? this.post.name[lang] : "No name",
        synopsis: this.post.synopsis[lang] ? this.post.synopsis[lang] : "",
        date: this.post.date ? this.post.date : "No date",
        author: this.post.author ? this.post.author : "No author",
        image: this.post.image ? this.post.image : false,
        content: content.content[lang] ? content.content[lang] : "No content",
      };
    }
  }

  render() {
    let content = this.post ? (
      <div className="blog__article">
        <ReactHelmet
          title={this.state.title}
          description={this.state.synopsis}
          author={this.state.author}
          keywords={["blog", "article"]}
        />
        <Beadcrumb path={window.location.path} />
        <div className="blog__article__container">
          <div className="blog__article__metadata">
            <div className="blog__artile__metadata__title">
              <h1>{this.state.title}</h1>
            </div>
            {/* <p>{this.state.synopsis}</p> */}
            <div className="blog__article__metadata__bottom">
              <div className="blog__article__metadata__bottom__creator">
                <img
                  src="https://www.gravatar.com/avatar/d0777905cd81c3495197a148cd3f40c0"
                  alt={this.state.author}
                ></img>
                <h5>
                  {this.state.author} - {this.state.date}
                </h5>
              </div>
              <div className="blog__article__metadata__bottom__share"></div>{" "}
              {/* nothing for now but to add someday */}
            </div>
          </div>
        </div>
        <img src={this.state.image} />
        <Markdown>{this.state.content}</Markdown>
      </div>
    ) : (
      <Redirect to="/404" />
    ); // return 404 if post doesn't exists
    return <div className="blog">{content}</div>;
  }
}

export default BlogPost;
