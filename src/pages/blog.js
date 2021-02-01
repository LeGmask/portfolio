import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";

import BlogCard from "../components/blogCard/blogCard";
import Beadcrumb from "../components/helmet/beadcrumb";
import ReactHelmet from "../components/helmet/reactHelmet";

import translations from "../i18n/locales";

import postList from "../content/blog/postList.json";

import "./scss/blog.scss";

class Blog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: props.locale,
      posts: postList,
    };
  }
  render() {
    return (
      <div className="blog">
        <ReactHelmet
          title={translations[this.state.locale]["link.nav.blog"]}
          description={translations[this.state.locale]["blog.description"]}
          author="Evann DREUMONT"
          keywords={["blog", "story", "article"]}
        />
        <Beadcrumb
          path={window.location.pathname}
          origin={window.location.origin}
        />
        <div className="blog__page">
          <div className="blog__page__title">
            <h1>
              <Message id="link.nav.blog" defaultMessage="Blog" />
            </h1>
          </div>
          <div className="blog__page__description">
            <Message
              id="blog.description"
              defaultMessage="Read about my coding or digital life, sometimes I will also put some personal tips !"
            />
          </div>
        </div>
        <div className="blog__postList">
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
                  date={post.date}
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
