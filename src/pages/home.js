import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";

import Beadcrumb from "../components/helmet/beadcrumb";
import ReactHelmet from "../components/helmet/reactHelmet";
import ProjectTile from "../components/projectTile/projectTile";
import BlogTile from "../components/blogTile/blogTile";

import { ReactComponent as Separator1 } from "../images/home__separator1.svg";
import { ReactComponent as Separator2 } from "../images/home__separator2.svg";

import translations from "../i18n/locales";

import content from "../content/home.json";

import "./scss/home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      projects: content.projects,
      blog: content.articles,
      age: this.getAge(new Date(2003, 2, 27)),
    };
  }

  getAge(date) {
    var diff_ms = Date.now() - date.getTime();
    var age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970);
  }

  render() {
    return (
      <main className="home">
        <section className="home__presentation">
          <div className="home__presentation__container">
            <div className="home__presentation__content">
              <h1>
                <Message
                  id="home.presentation.welcome"
                  defaultMessage="Hi! I'm Evann DREUMONT!"
                />
              </h1>
              <p>
                <Message
                  id="home.presentation.bio1"
                  defaultMessage="I'm {age} years old and I'm interested in almost anything that is digital."
                  values={{ age: this.state.age }}
                />
              </p>
              <p>
                <Message
                  id="home.presentation.bio2"
                  defaultMessage=" I also love music, and calculator."
                />
              </p>
            </div>
            <div className="home__presentation__profile">
              <img
                src="https://www.gravatar.com/avatar/d0777905cd81c3495197a148cd3f40c0?s=300"
                alt="Evann DREUMONT"
              ></img>
            </div>
          </div>
          <Separator1 className="home__separator" />
        </section>
        <section className="home__projects">
          <div className="home__projects__container">
            <div className="home__projects__title">
              <h2>
                <Message
                  id="home.projects.title"
                  defaultMessage="Latest projects:"
                />
              </h2>
              <p>
                <Message
                  id="home.projects.description"
                  defaultMessage="I love coding things to make my everydays task easier, here are the latest, you can find more on the projects tab !"
                />
              </p>
            </div>
          </div>
          <div className="home__projects__container">
            <div className="home__projects__tiles">
              {this.state.projects.map(
                function (project) {
                  let lang = this.state.locale;
                  if (!project.lang.includes(this.props.locale)) {
                    lang = project.lang[0];
                  }

                  var img = null;
                  if (project.media.type == "image") {
                    img = project.media.source;
                  }

                  return (
                    <ProjectTile
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
          <Separator2 className="home__separator" />
        </section>
        <section className="home__blog">
          <div className="home__blog__container">
            <div className="home__blog__title">
              <h2>
                <Message
                  id="home.blog.title"
                  defaultMessage="Latest articles on my blog :"
                />
              </h2>
              <p>
                <Message
                  id="home.blog.description"
                  defaultMessage="Read about my latest coding adventure, or digital exploration"
                />
              </p>
            </div>
          </div>
          <div className="home__blog__container">
            <div className="home__blog__tiles">
              {this.state.blog.map(
                function (post) {
                  let lang = this.props.locale;
                  if (!post.lang.includes(this.props.locale)) {
                    lang = post.lang[0];
                  }
                  return (
                    <BlogTile
                      title={post.name[lang]}
                      synopsis={post.synopsis[lang]}
                      author={post.author}
                      date={post.date}
                      img={post.image}
                      link={`/blog/${post.id}`}
                    />
                  );
                }.bind(this)
              )}
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default Home;
