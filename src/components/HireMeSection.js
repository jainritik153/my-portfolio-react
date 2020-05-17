import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";

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
            <NavLink to="/contact">
              <input
                className="btn btn-primary"
                type="submit"
                value="Contact Me"
              ></input>
            </NavLink>
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
