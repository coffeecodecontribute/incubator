import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Navigation } from "./components/Navigation";
import { Image } from "./components/Image";
import { Footer } from "./components/Footer";
import { Content } from "./components/Content";
import { Article } from "./components/Article";

ReactDOM.render(
  <Fragment>
    <Navigation />
    <Content />
    <Image />
    <Article/>
    <Footer />
  </Fragment>,
  document.getElementById("root")
);
