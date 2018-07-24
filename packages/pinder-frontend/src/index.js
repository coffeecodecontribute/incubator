import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { List } from "./components/List";

ReactDOM.render(
  <Fragment>
    <Navigation />
    <Content />
    <List />
    <Footer />
  </Fragment>,
  document.getElementById("root")
);
