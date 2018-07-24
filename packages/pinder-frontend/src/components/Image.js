import React, { Fragment } from "react";

export const Image = ({ alt, src, description }) => (
  <Fragment>
    <img alt={alt} src={src} />
    <div>
      <em>{description}</em>
    </div>
  </Fragment>
);
