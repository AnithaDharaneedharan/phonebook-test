import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";
import App from "./app";
import SearchContacts from "./searchContacts";
import ContactPage from "./contactPage";
import "./index.css";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={SearchContacts} />
      <Route path="search/:terms" component={SearchContacts} />
      <Route path="contact/:contact" component={ContactPage} />
    </Route>
  </Router>,
  document.getElementById("root")
);
