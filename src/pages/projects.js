import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";

import Beadcrumb from "../components/helmet/beadcrumb";
import ReactHelmet from "../components/helmet/reactHelmet";
import ProjectCard from "../components/projectCard/projectCard";

import projectsList from "../content/project/out/projectsList.json";

import translations from "../i18n/locales";

import "./scss/projects.scss";

class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: this.props.locale,
      projects: projectsList,
    };
  }
  render() {
    return (
      <div className="projects">
        <ReactHelmet
          title={translations[this.state.locale]["link.nav.projects"]}
          description={translations[this.state.locale]["projects.description"]}
          author="Evann DREUMONT"
          keywords={["projects", "projets"]}
        />
        <Beadcrumb
          path={window.location.pathname}
          origin={window.location.origin}
        />
        <div className="projects__page">
          <div className="projects__page__title">
            <h1>
              <Message id="link.nav.projects" defaultMessage="Projects" />
            </h1>
          </div>
          <div className="projects__page__description">
            <Message
              id="projects.description"
              defaultMessage="Find some of my projects, and description about each"
            />
          </div>
        </div>
        <div className="projects__projectList">
          {this.state.projects.map(
            function (project) {
              let lang = this.props.locale;
              if (!project.lang.includes(this.props.locale)) {
                lang = project.lang[0];
              }
              var img = null;
              if (project.media.type == "image") {
                img = project.media.source;
              }
              return (
                <ProjectCard
                  uri={`/projects/${project.uri}`}
                  tags={project.tags}
                  builtWith={project.builtWith}
                  title={project.title}
                  description={project.desc[lang]}
                  created={project.created}
                  img={img}
                />
              );
            }.bind(this)
          )}
        </div>
      </div>
    );
  }
}

export default Projects;
