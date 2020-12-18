import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import Markdown from "../components/markdownComponent";

import logo from "../images/logo.svg";
import "../App.scss";

import postlist from "../content/postList.json";
const lang = "FR";

export default class exemple extends Component {
  constructor(props) {
    super(props);
    document.title = "Exemple";
    var fetchedPost = {};
    postlist.forEach((post) => {
      if ("hello-world-nn2jbVfFS" === post.id) {
        fetchedPost.title = post.title ? post.title : "No title given";
        fetchedPost.date = post.date ? post.date : "No date given";
        fetchedPost.author = post.author ? post.author : "No author given";
        fetchedPost.content = post.content[lang]
          ? post.content[lang]
          : "No content given";
      }
    });
    this.state = {
      content: fetchedPost.content,
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage
              id="Home.welcome"
              defaultMessage="Edit <code>src/App.js</code> and save to reload."
            />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Markdown>{this.state.content}</Markdown>
        </header>
      </div>
    );
  }
}
