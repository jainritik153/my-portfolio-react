import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Fade from "react-reveal/Fade";

const HireMe = () => {
  return (
    <div>
      <section className="hire-me flex items-center justify-between ">
        <div className="flex-1 justify-center">
          <Fade left>
            <h1 className="heading">Hire Me</h1>
            <p className="title">
              “I think people hire me because I am good at what I love to do.”
            </p>
            <PrimaryButton title="Contact Me"></PrimaryButton>
          </Fade>
        </div>
        <Fade right>
          <div className="flex-1 justify-center">
            <img src={require("../img/banner/hireme.png")}></img>
          </div>
        </Fade>
      </section>
    </div>
  );
};

export default HireMe;
