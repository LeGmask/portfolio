import React, { Component, Suspense } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect as RouterRedirect,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Header from "./components/header/header";
import Exemple from "./pages/exemple"; // Home page shouldn't have a spinner on loading
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
          <Router>
            <ScrollToTop />
            <Header />
            <Suspense fallback={<Loader />}>
              <Switch>
                <Route exact path="/" component={Exemple} />
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
                      <NotFound />
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
