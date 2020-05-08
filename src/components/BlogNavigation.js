import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { BlogContext } from "../Contexts/BlogDataContext";
import Fade from "react-reveal/Fade";

const BlogNavigation = () => {
  const { getAllCategory } = useContext(BlogContext);
  const categoryList = getAllCategory();
  return (
    <div className="blog-navigation flex justify-center">
      <nav>
        {categoryList.map((category) => {
          const path = `/blogs/${category}`;
          return (
            <NavLink className="blog-nav-item" to={path}>
              {category}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default BlogNavigation;
