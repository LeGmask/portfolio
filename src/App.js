import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { FormattedMessage } from "react-intl";

import exemple from "./pages/exemple";
import notFound from "./pages/notFound";

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
      <IntlProvider locale={this.state.locale} messages={this.state.messages}>
        <Router>
          <Route path="/" component={exemple} exact />
          <Route component={notFound} />
        </Router>
      </IntlProvider>
    );
  }
}

export default App;
