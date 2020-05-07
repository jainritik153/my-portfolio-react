import React from "react";
import Fade from "react-reveal/Fade";

const Banner = (props) => {
  return (
    <div className="contact-banner">
      <div
        className="banner-content"
        style={{ backgroundColor: props.bgColor }}
      >
        <Fade top>
          <h2 className="title">{props.title}</h2>
          <h1 className="heading">{props.heading}</h1>
          <p className="description">{props.description}</p>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
