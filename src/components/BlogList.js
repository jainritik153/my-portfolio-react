import BlogCard from "../components/BlogCard";
import { BlogContext } from "../Contexts/BlogDataContext";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";

const BlogList = (props) => {
  const { getCategorySpecificData } = useContext(BlogContext);
  const categorisedBlogData = getCategorySpecificData(props.category);

  const categorisedBlogView = categorisedBlogData.map((blog) => (
    <Fade bottom>
      <BlogCard blogDetails={blog}></BlogCard>
    </Fade>
  ));

  return (
    <div style={{ background: "#f2f2f2" }}>
      <div className="blog-list">{categorisedBlogView}</div>
    </div>
  );
};

export default BlogList;
