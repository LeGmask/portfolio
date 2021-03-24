import React, { Component } from "react";
import { FormattedMessage as Message } from "react-intl";

import Beadcrumb from "../components/helmet/beadcrumb";
import ReactHelmet from "../components/helmet/reactHelmet";
import ProjectTile from "../components/projectTile/projectTile";
import BlogTile from "../components/blogTile/blogTile";

import { ReactComponent as Separator1 } from "../images/home__separator1.svg";
import { ReactComponent as Separator2 } from "../images/home__separator2.svg";

import content from "../content/home.json";

import "./scss/home.scss";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locale: this.props.locale,
      projects: content.projects,
      blog: content.articles,
    };
  }

  render() {
    let description = {
      fr:
        "Mon site-web/portfolio personel. Découvrez mes différents projets et des post en liens avec le digital",
      en:
        "My personal website/portfolio. Discover my differents projects and some story about digital",
    };
    return (
      <main className="home">
        <ReactHelmet
          description={description[this.props.locale]}
          author="Evann DREUMONT"
          keywords={["portfolio", "blog", "projects", "Evann DREUMONT"]}
        />
        <Beadcrumb
          path={window.location.pathname}
          origin={window.location.origin}
        />
        <section className="home__presentation">
          <div className="home__presentation__container">
            <div className="home__presentation__content">
              <h1>
                <Message
                  id="home.presentation.welcome"
                  defaultMessage="Evann DREUMONT"
                />
              </h1>
              <p>
                <Message
                  id="home.presentation.bio1"
                  defaultMessage="Student in final year of high school"
                />
              </p>
              <p>
                <Message
                  id="home.presentation.bio2"
                  defaultMessage="Passionate about digital technology, but not only..."
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
                  defaultMessage="Latest articles on my blog:"
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
