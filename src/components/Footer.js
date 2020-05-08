import React from "react";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <section className="footer">
      <div className="footer-contact"></div>
      <footer className="flex items-end justify-end">
        <div className="creator">
          <p>created by RITIK JAIN</p>
        </div>
        <div className="footer-contact">
          <h3>Facebook</h3>
          <h3>Twitter</h3>
          <h3>Linked In</h3>
          <h3>Facebook</h3>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
