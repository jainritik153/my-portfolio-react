import React, { useState } from "react";
import PrimaryButton from "../components/PrimaryButton";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import firebase from "../firebase";

var db = firebase.firestore();

const Contact = () => {
  const [contactData, setContactData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const validateData = () => {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (contactData.Email && contactData.Email.match(mailformat)) {
      if (contactData.Name) {
        if (contactData.Message) {
          setContactData({ Name: "", Email: "", Message: "" });
          return true;
        } else {
          alert("Please Enter Valid Message");
        }
      } else {
        alert("Please Enter Valid Name");
      }
    } else {
      alert("Please Enter Valid Email");
    }
  };

  const handleSubmit = () => {
    if (validateData()) {
      db.collection("ContactInfo")
        .add(contactData)
        .then(function (docRef) {
          alert("Form submitted successfully");
        })
        .catch(function (error) {
          alert("Error in Submiting form");
        });
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContactData((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

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
              <input
                className="form-input"
                type="text"
                value={contactData.Name}
                name="Name" //name should be same as it is in state
                placeholder="Full Name"
                onChange={handleChange}
                required
              ></input>
            </div>
            <div className="flex direction-column flex-1">
              <label className="form-label ">
                <h2>EMAIL</h2>
              </label>
              <input
                className="form-input"
                type="email"
                value={contactData.Email}
                name="Email" //name should be same as it is in state
                placeholder="Email"
                onChange={handleChange}
                required
              ></input>
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
                value={contactData.Message}
                name="Message" //name should be same as it is in state
                placeholder="Message"
                onChange={handleChange}
                required
              ></textarea>
            </div>
          </div>
        </form>
        <div
          className="flex items-center justify-center"
          style={{ marginTop: "3%" }}
        >
          <input
            className="btn btn-primary"
            type="submit"
            value="Submit Message"
            onClick={handleSubmit}
          ></input>
        </div>
      </div>
      <Footer></Footer>
    </section>
  );
};

export default Contact;
