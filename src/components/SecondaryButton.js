import React from "react";
import { NavLink } from "react-router-dom";

const SecondaryButton = (props) => {
  console.log(props);
  const path =
    props.title === "See Blogs" ? "/blogs/category/All" : "/projects";
  return (
    <div className="sec-btn-container flex-1 ">
      <NavLink to={path}>
        <input
          className="btn btn-secondary "
          type="button"
          value={props.title}
        ></input>
      </NavLink>
    </div>
  );
};

export default SecondaryButton;
