import React, { Component, Suspense } from "react";
import {
  Router,
  Route,
  Switch,
  Redirect as RouterRedirect,
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { HelmetProvider } from "react-helmet-async";
import ReactGA from "react-ga";

import ScrollToTop from "./components/scrollToTop/scrollToTop";
import CookieConsent from "./components/cookieConsent/cookieConsent";
import Header from "./components/header/header";
import Exemple from "./pages/exemple"; // Home page shouldn't have a spinner on loading
const Projects = React.lazy(() => import("./pages/projects"));
const ProjectPage = React.lazy(() => import("./pages/projectPage"));
const BlogPost = React.lazy(() => import("./pages/blogPost"));
const Blog = React.lazy(() => import("./pages/blog"));
const About = React.lazy(() => import("./pages/about"));
const Contact = React.lazy(() => import("./pages/contact"));
import Redirect from "./pages/redirect";
import NotFound from "./pages/notFound";
import Footer from "./components/footer/footer";
import Loader from "./components/loader/loader";

import { IntlProvider } from "react-intl";
import translations from "./i18n/locales";

const history = createBrowserHistory(window);

if (location.hostname != "localhost") {
  ReactGA.initialize("UA-188538540-1", {
    debug: false,
  });

  history.listen((location) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

class App extends Component {
  constructor(props) {
    super(props);

    var initLang = localStorage.getItem("locale");

    if (initLang == null) initLang = this.getLang();
    if (!(initLang in translations)) {
      initLang = "en";
    }

    this.state = {
      locale: initLang,
      messages: translations[initLang],
    };

    this.onChangeLanguage = this.onChangeLanguage.bind(this);
  }

  componentDidMount() {
    if (location.hostname != "localhost") {
      ReactGA.pageview(window.location.pathname);
    }
  }

  getLang() {
    if (navigator.languages !== undefined) return navigator.languages[0];
    else return navigator.language;
  }

  onChangeLanguage(lang) {
    localStorage.setItem("locale", lang);
    this.setState({ locale: lang, messages: translations[lang] });
  }

  render() {
    return (
      <HelmetProvider>
        <IntlProvider locale={this.state.locale} messages={this.state.messages}>
          <Router history={history}>
            <ScrollToTop />
            <CookieConsent />
            <Header />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/" component={Exemple} />
                <Route
                  exact
                  path="/projects"
                  component={() => <Projects locale={this.state.locale} />}
                />
                <Route
                  path="/projects/:uri"
                  component={(routerProps) => (
                    <ProjectPage
                      locale={this.state.locale}
                      uri={routerProps.match.params.uri}
                    />
                  )}
                />
                <Route
                  path="/blog/:article"
                  component={(routerProps) => (
                    <BlogPost
                      locale={this.state.locale}
                      postId={routerProps.match.params.article}
                    />
                  )}
                />
                <Route
                  exact
                  path="/blog"
                  component={() => <Blog locale={this.state.locale} />}
                />
                <Route
                  exact
                  path="/about"
                  component={() => <About locale={this.state.locale} />}
                />
                <Route
                  exact
                  path="/contact"
                  component={() => <Contact locale={this.state.locale} />}
                />
                <Route path="/to/:service" component={Redirect} />
                <Route
                  component={() => (
                    <React.Fragment>
                      <RouterRedirect to="/404" />
                      <NotFound locale={this.state.locale} />
                    </React.Fragment>
                  )}
                />
              </Switch>
            </Suspense>
            <Footer
              onChangeLanguage={this.onChangeLanguage}
              locale={this.state.locale}
            />
          </Router>
        </IntlProvider>
      </HelmetProvider>
    );
  }
}

export default App;
