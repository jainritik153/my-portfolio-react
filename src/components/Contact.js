import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import Banner from "../components/Banner";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <section className="contact">
      <Banner
        title="Status"
        heading="Available"
        description=" I’m currently looking for software developer role from 2020."
      ></Banner>
      <div className="form-container">
        <form>
          <div className="input-container flex">
            <div className="flex direction-column flex-1">
              <label className="form-label">
                <h2>NAME</h2>
              </label>
              <input className="form-input" type="text"></input>
            </div>
            <div className="flex direction-column flex-1">
              <label className="form-label ">
                <h2>EMAIL</h2>
              </label>
              <input className="form-input" type="email"></input>
            </div>
          </div>
          <div>
            <div
              className="flex direction-column flex-1"
              style={{ marginTop: "2%" }}
            >
              <label className="form-label ">
                <h2>ANY MESSAGE FOR ME</h2>
              </label>
              <textarea
                className="form-input"
                type="textarea"
                style={{ width: "95%", padding: "3%" }}
              ></textarea>
            </div>
          </div>
        </form>
        <div
          className="flex items-center justify-center"
          style={{ marginTop: "3%" }}
        >
          <PrimaryButton title="Submit Message"></PrimaryButton>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Contact;
