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
    <Image
      alt="Panda"
      src="https://www.seokratie.de/wp-content/uploads/2014/05/panda-800x593.jpg"
      description="An awesome panda"
    />
    <Article />
    <Footer />
  </Fragment>,
  document.getElementById("root")
);
