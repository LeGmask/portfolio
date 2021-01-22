import React, { Component } from "react";
import BlogCard from "../components/blogCard/blogCard";

import postList from "../content/blog/postList.json";

import "./sass/blog.scss";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: postList,
    };
  }
  render() {
    return (
      <div className="blog">
        <div className="blog__post">
          {this.state.posts.map(
            function (post) {
              let lang = this.props.locale;
              if (!post.lang.includes(this.props.locale)) {
                lang = post.lang[0];
              }
              return (
                <BlogCard
                  title={post.name[lang]}
                  synopsis={post.synopsis[lang]}
                  img={post.image}
                  link={`/blog/${post.id}`}
                />
              );
            }.bind(this)
          )}
        </div>
      </div>
    );
  }
}

export default Blog;
