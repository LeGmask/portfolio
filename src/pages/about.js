import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage as Message } from "react-intl";

import ReactHelmet from "../components/helmet/reactHelmet";
import Beadcrumb from "../components/helmet/beadcrumb";

import translations from "../i18n/locales";

import { FaGithub as GithubIcon, FaFileDownload as File } from "react-icons/fa";
import { SiMinutemailer as MailIcon } from "react-icons/si";

import "./scss/about.scss";

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      locale: props.locale,
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
      <div className="about">
        <ReactHelmet
          title={translations[this.state.locale]["link.nav.about"]}
          description={translations[this.state.locale]["about.description"]}
          author="Evann DREUMONT"
          keywords={["About", "story", "life", "a propos", "histoire", "vie"]}
        />
        <Beadcrumb
          path={window.location.pathname}
          origin={window.location.origin}
        />
        <div className="about__page">
          <div className="about__page__title">
            <h1>
              <Message id="about.title" defaultMessage="About me" />
            </h1>
          </div>
          <div className="about__page__description">
            <Message
              id="about.description"
              defaultMessage="Here are everything about me"
            />
          </div>
        </div>
        <div className="about__card">
          <div className="about__card__content">
            <div className="about__card__content__title">
              <h1>
                <Message
                  id="about.card.title"
                  defaultMessage="Salut ! C'est Evann DREUMONT !"
                />
              </h1>
            </div>
            <div className="about__card__content__paragraph">
              <p>
                <Message
                  id="about.card.bio1"
                  defaultMessage="J'ai {age} ans, et je suis depuis toujours intéressé par la création et le numérique. C'est cette curiosité qui m'a conduit à approfondir en autodidacte plusieurs domaines qui m'intéresse."
                  values={{ age: this.state.age }}
                />
              </p>
            </div>
            <div className="about__card__content__paragraph">
              <p>
                <Message
                  id="about.card.bio2"
                  defaultMessage="J'ai notament appris à programmer dans différents langages informatiques: HTML, Python et JavaScript, ce qui m'a permis de contribuer a des projets open sources, notament a une application web pour étudiant, ainsi que de créer mon site."
                />
              </p>
            </div>
            <div className="about__card__content__paragraph">
              <p>
                <Message
                  id="about.card.bio3"
                  defaultMessage='Tout mes projets de programmation sont visibles par tous sur mon profil GitHub: tout mes projets sont dits "Open Source"'
                />
              </p>
            </div>
          </div>
          <div className="about__card__control">
            <div className="about__card__control__image">
              <img
                src="https://www.gravatar.com/avatar/d0777905cd81c3495197a148cd3f40c0?s=150"
                alt="Evann DREUMONT"
              ></img>
            </div>
            <div className="about__card__control__links">
              <Link
                to={{
                  pathname:
                    "https://drive.google.com/uc?id=1SOJ_9uzTxb7jVKYi7XrfsuWA3pVfWIRc&export=download",
                }}
                target="_blank"
                download
              >
                <button>
                  <File />
                  CV
                </button>
              </Link>
              <Link to="/to/github" target="_blank">
                <button>
                  <GithubIcon />
                  GitHub
                </button>
              </Link>
              <Link to="/to/mail" target="_blank">
                <button>
                  <MailIcon />
                  Mail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
