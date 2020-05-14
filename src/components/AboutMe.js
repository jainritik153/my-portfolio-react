import React from "react";
import SecondaryButton from "../components/SecondaryButton";
import Fade from "react-reveal/Fade";

const AboutMe = () => {
  return (
    <div className="about-container">
      <section className="about flex items-center justify-between">
        <div className="flex-1">
          <Fade bottom>
            <img src={require("../img/banner/about-us.png")}></img>
          </Fade>
        </div>
        <div className="flex-1">
          <Fade bottom>
            <h1 className="heading" style={{ color: "white" }}>
              {" "}
              About Me
            </h1>
            <h3 className="title">Hello! I'm Ritik Jain</h3>
            <p className="description" style={{ color: "white" }}>
              I enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I'm not coding, tweeting or pushing
              pixels, you'll find me cooking, gardening or working out in the
              park.I enjoy turning complex problems into simple, beautiful and
              intuitive designs. When I'm not coding, tweeting or pushing
              pixels, you'll find me cooking, gardening or working out in the
              park.
            </p>
            <div className="flex items-center">
              <SecondaryButton title="See Blogs"></SecondaryButton>
              <SecondaryButton title="See Projects"></SecondaryButton>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
