import React, { useContext } from "react";
import { BlogContext } from "../Contexts/BlogDataContext";
import { NavLink } from "react-router-dom";
import PrimaryButton from "./PrimaryButton";

const TagNavigation = () => {
  const { getAllTags } = useContext(BlogContext);
  const tagList = getAllTags();

  return (
    <div>
      <nav
        className="flex justify-center items-center"
        style={{ flexWrap: "wrap" }}
      >
        {tagList.map((tag) => {
          const path = `/blogs/tag/${tag}`;
          return (
            <NavLink className="tag-nav-link" to={path}>
              <p>{tag}</p>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default TagNavigation;
