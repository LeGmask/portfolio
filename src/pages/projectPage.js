import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";

import emoji from "remark-emoji";
import gfm from "remark-gfm";
import images from "remark-images";

import projectList from "../content/project/out/projectsList.json";

import "./scss/projectPage.scss";

function getProject(url) {
  let project = null;
  projectList.forEach((data) => {
    if (url === data.uri) {
      project = data;
    }
  });
  return project;
}

const remarkConfig = {
  plugins: [gfm, emoji, images],
};

class ProjectPage extends Component {
  constructor(props) {
    super(props);
    var lang = props.locale;
    var content = "No content";

    this.project = getProject(this.props.uri);

    try {
      content = require(`../${this.project.file}`);
    } catch (error) {
      content = "No content";
    }

    if (this.project) {
      if (!this.project.lang.includes(props.locale)) {
        lang = this.project.lang[0];
      }

      this.state = {
        uri: this.props.uri,
        tags: this.project.tags ? this.project.tags : [],
        buildWith: this.project.buildWith ? this.project.buildWith : [],
        title: this.project.title ? this.project.title : "No title",
        media: this.project.media ? this.project.media : null,
        created: this.project.created ? this.project.created : null,
        links: this.project.links[lang] ? this.project.links[lang] : [],
        description: this.project.desc[lang]
          ? this.project.desc[lang]
          : "No description",
        content: content.content[lang] ? content.content[lang] : "No content",
      };

      this.renderMedia = this.renderMedia.bind(this);
    }
  }

  renderMedia() {
    if (this.state.media) {
      switch (this.state.media.type) {
        case "image":
          console.log("image");
          return (
            <figure>
              <img src={this.state.media.source} alt={this.state.media.alt} />
            </figure>
          );

        case "audio":
          return (
            <figure>
              <audio
                controls
                src={this.state.media.source}
                alt={this.state.media.alt}
              >
                Your browser does not support the
                <code>audio</code> element.
              </audio>
            </figure>
          );
          break;

        case "video":
          return (
            <figure>
              <video
                controls
                src={this.state.media.source}
                alt={this.state.media.alt}
              >
                Your browser does not support the
                <code>video</code> element.
              </video>
            </figure>
          );

          break;

        default:
          return null;
      }
    } else {
      return null;
    }
  }

  render() {
    let content = this.project ? (
      <>
        <div className="project__title">
          <h1>{this.state.title}</h1>
        </div>
        <div className="project__media">{this.renderMedia()}</div>
        <div className="project__description">
          <ReactMarkdown
            plugins={remarkConfig.plugins}
            className="project__description__markdown"
          >
            {this.state.description}
          </ReactMarkdown>
        </div>
        {this.state.content.map((paragraph) => (
          <div className="project__paragraph">
            <ReactMarkdown
              plugins={remarkConfig.plugins}
              className="project__description__markdown"
            >
              {paragraph}
            </ReactMarkdown>
          </div>
        ))}
        <div className="project__links">
          {this.state.links.map((link) => (
            <Link to={{ pathname: link.url }}>
              <button>{link.name}</button>
            </Link>
          ))}
        </div>
        <div className="project__data">
          <div className="project__data__tags">
            {this.state.tags.map((tag) => (
              <Link>#{tag}</Link>
            ))}
          </div>
        </div>
      </>
    ) : (
      <Redirect to="/404" />
    );

    return <div className="project">{content}</div>;
  }
}

export default ProjectPage;
