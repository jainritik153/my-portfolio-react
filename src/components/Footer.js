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
      </footer>
    </section>
  );
};

export default Footer;
