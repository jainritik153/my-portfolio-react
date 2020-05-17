import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Fade from "react-reveal/Fade";
import firebase from "../firebase";

const Hero = (props) => {
  const [resumeUrl, setResumeUrl] = useState("");
  const getResume = () => {
    var storage = firebase.storage();
    var pathReference = storage.ref("Resume.pdf");
    pathReference
      .getDownloadURL()
      .then(function (url) {
        setResumeUrl(url);
      })
      .catch((err) => {
        console.log("Error while fetching resume", err);
      });
  };

  getResume();

  return (
    <section className="hero flex items-center justify-between ">
      <div className="left flex-1">
        <Fade bottom>
          <h1 className="heading">I'm a Software Engineer</h1>
          <p className="title">Mumbai, India</p>

          <p className="description">
            I enjoy turning complex problems into simple, beautiful and
            intuitive designs. When I'm not coding, tweeting or pushing pixels,
            you'll find me cooking, gardening or working out in the park.
          </p>
          <div className="hero-primary-button">
            <PrimaryButton
              resumeUrl={resumeUrl}
              title="Download Resume"
            ></PrimaryButton>
          </div>
        </Fade>
      </div>

      <div className="right flex flex-1 justify-center items-center">
        <img
          src={require("../img/banner/banner-image.png")}
          alt="banner-img"
        ></img>
      </div>
    </section>
  );
};

export default Hero;
