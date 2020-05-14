import React, { useState } from "react";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import HireMe from "../components/HireMeSection";
import Footer from "../components/Footer";

const About = () => {
  // var storageRef = firebase.storage().ref("BannerImage/about-us.png");

  // const getImage=async()=>{
  //   try {
  //     const url = await storageRef.getDownloadURL()
  //     setimgUrl(url)
  //     setLoading(false)
  //   } catch (error) {
  //     console.log("error in loading image ",error)
  //   }

  // }

  return (
    <div>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <HireMe></HireMe>
      <Footer></Footer>
    </div>
  );
};

export default About;
