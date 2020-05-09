import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [toggle, setToggle] = useState("none");

  const handleClick = () => {
    const value = toggle === "none" ? "block" : "none";
    setToggle(value);
    console.log(toggle);
  };

  const handleNavClick = () => {
    setToggle("none");
  };

  return (
    <header className="header-container">
      <div className="header-contents flex items-center justify-between">
        <div className="logo flex-1">
          <h2>Ritik Jain</h2>
        </div>
        <div className="burger-icon">
          <h3 onClick={handleClick}>click</h3>
        </div>
        <nav className="flex items-center flex-1 justify-between">
          <NavLink className="header-navlink" to="/my-portfolio/">
            About
          </NavLink>
          <NavLink className="header-navlink" to="/my-portfolio/projects">
            Project
          </NavLink>
          <NavLink className="header-navlink" to="/my-portfolio/blogs/All">
            Blog
          </NavLink>
          <NavLink className="header-navlink" to="/my-portfolio/contact">
            Contact
          </NavLink>
        </nav>
      </div>
      <div className="responsive-nav-container" style={{ display: toggle }}>
        <nav className="responsive-nav flex direction-column items-center">
          <NavLink
            onClick={handleNavClick}
            className="header-navlink"
            to="/my-portfolio/"
          >
            About
          </NavLink>
          <NavLink
            onClick={handleNavClick}
            className="header-navlink"
            to="/my-portfolio/projects"
          >
            Project
          </NavLink>
          <NavLink
            onClick={handleNavClick}
            className="header-navlink"
            to="/my-portfolio/blogs/All"
          >
            Blog
          </NavLink>
          <NavLink
            onClick={handleNavClick}
            className="header-navlink"
            to="/my-portfolio/contact"
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
