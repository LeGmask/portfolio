import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { FormattedMessage as Message } from "react-intl";

import BuildWith from "../components/buildWith/buildWith";
import ReactHelmet from "../components/helmet/reactHelmet";
import Beadcrumb from "../components/helmet/beadcrumb";

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
    this.project = getProject(this.props.uri);

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
        description: this.project.desc[lang] ? this.project.desc[lang] : "",
        content: this.project.content[lang] ? this.project.content[lang] : [""],
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

        default:
          return null;
      }
    } else {
      return null;
    }
  }

  render() {
    let content = this.project ? (
      <React.Fragment>
        <ReactHelmet
          title={this.state.title}
          description={this.state.description}
          author="Evann DREUMONT"
          keywords={this.state.tags}
        />
        <Beadcrumb path={window.location.pathname} />
        <div className="project__tags">
          {this.state.tags.map((tag) => (
            <Link to="/projects">#{tag}</Link>
          ))}
        </div>
        <div className="project__title">
          <h1>{this.state.title}</h1>
        </div>
        <div className="project__container">
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
                className="project__paragraph__markdown"
              >
                {paragraph}
              </ReactMarkdown>
            </div>
          ))}
        </div>
        <div className="project__links">
          {this.state.links.map((link) => (
            <a href={link.url}>
              <button>{link.name}</button>
            </a>
          ))}
        </div>
        <div className="project__about">
          <div className="project__about__title">
            <h1>
              <Message
                id="project.buildwith.title"
                defaultMessage="Build with"
              />
            </h1>
          </div>
          <div className="project__about__subtitle">
            <Message
              id="project.buildwith.subtitle"
              defaultMessage="the software, frameworks, libraries, materials and services I used to make this"
            />
          </div>
          <BuildWith
            buildWith={this.state.buildWith}
            className="project__about__buildWith"
          />
        </div>
      </React.Fragment>
    ) : (
      <Redirect to="/404" />
    );
    return <div className="project">{content}</div>;
  }
}

export default ProjectPage;
