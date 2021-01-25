import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect as RouterRedirect,
} from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Header from "./components/header/headerComponent";
import exemple from "./pages/exemple";
import BlogPost from "./pages/blogPost";
import Blog from "./pages/blog";
import Redirect from "./pages/redirect";
import NotFound from "./pages/notFound";
import Footer from "./components/footer/footerComponent";

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
            <Switch>
              <Route exact path="/" component={exemple} />
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
              <Route path="/to/:service" component={Redirect} />
              <Route
                component={() => (
                  <>
                    <RouterRedirect to="/404" />
                    <NotFound />
                  </>
                )}
              />
            </Switch>
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
