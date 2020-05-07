import React from "react";
import PrimaryButton from "./PrimaryButton";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <section className="hero flex items-center justify-between ">
      <Fade left>
        <div className="left flex-1">
          <h1 className="heading">I'm a Software Engineer</h1>
          <p className="title">Mumbai, India</p>

          <p className="description">
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not coding, tweeting or pushing pixels,
            you'll find me cooking, gardening or working out in the park.
          </p>
          <div className="hero-primary-button">
            <PrimaryButton title="Download Resume"></PrimaryButton>
          </div>
        </div>
      </Fade>

      <Fade right>
        <div className="right flex flex-1 justify-center items-center">
          <img
            src={require("../img/banner/banner-image.png")}
            alt="banner-img"
          ></img>
        </div>
      </Fade>
    </section>
  );
};

export default Hero;
