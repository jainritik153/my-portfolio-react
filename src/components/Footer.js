import React from "react";
import { SocialIcon } from "react-social-icons";

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer-contact"></div>
      <footer className="flex items-end justify-between">
        <div className="flex direction-column ">
          <div className="flex items-center" style={{ marginTop: "10px" }}>
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.linkedin.com/in/ritik-jain-809246181"
            />
            <p
              className="social-icon-text"
              style={{ color: "grey", fontWeight: "600", marginLeft: "10px" }}
            >
              ON LINKED IN
            </p>
          </div>
          <div className="flex items-center" style={{ marginTop: "10px" }}>
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.facebook.com/"
            />
            <p
              className="social-icon-text"
              style={{ color: "grey", fontWeight: "600", marginLeft: "10px" }}
            >
              ON FACEBOOK
            </p>
          </div>
          <div className="flex items-center" style={{ marginTop: "10px" }}>
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://www.twitter.com/"
            />
            <p
              className="social-icon-text"
              style={{ color: "grey", fontWeight: "600", marginLeft: "10px" }}
            >
              ON TWITTER
            </p>
          </div>
          <div className="flex items-center" style={{ marginTop: "10px" }}>
            <SocialIcon
              style={{ height: 35, width: 35 }}
              url="https://wwww.instagram.com/"
            />
            <p
              className="social-icon-text"
              style={{ color: "grey", fontWeight: "600", marginLeft: "10px" }}
            >
              ON INSTAGRAM
            </p>
          </div>
        </div>
        <div className="creator">
          <p>created by RITIK JAIN</p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
