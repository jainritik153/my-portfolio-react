import BlogCard from "../components/BlogCard";
import { BlogContext } from "../Contexts/BlogDataContext";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

const BlogList = (props) => {
  const { getCategorySpecificData, loading } = useContext(BlogContext);
  const categorisedBlogData = getCategorySpecificData(props.category);
  console.log("a----------------------loading  ==============", loading);
  const categorisedBlogView = categorisedBlogData.map((blog) => (
    <BlogCard blogDetails={blog}></BlogCard>
  ));

  return (
    <div style={{ background: "#f2f2f2" }}>
      <div className="blog-list">{categorisedBlogView}</div>
    </div>
  );
};

export default BlogList;
