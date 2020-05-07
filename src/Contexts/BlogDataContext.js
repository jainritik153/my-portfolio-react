import React, { useState } from "react";
import { BlogData } from "../Data/BlogData";

export const BlogContext = React.createContext();

const BlogContextProvider = (props) => {
  const [blogData, setBlogData] = useState(BlogData);

  const getCategorySpecificData = (category) => {
    if (category === "All") {
      return blogData;
    }
    return blogData.filter((blog) => blog.category === category);
  };

  const getAllCategory = () => {
    const data = blogData.map((blog) => blog.category);
    return [...new Set(data)];
  };

  return (
    <BlogContext.Provider
      value={{ blogData, getCategorySpecificData, getAllCategory }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
