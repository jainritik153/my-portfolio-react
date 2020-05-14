import BlogCard from "../components/BlogCard";
import { BlogContext } from "../Contexts/BlogDataContext";
import React, { useContext } from "react";
import Fade from "react-reveal/Fade";
import CircularProgress from "@material-ui/core/CircularProgress";

const BlogList = (props) => {
  const {
    getCategorySpecificData,
    getKeywordSpecificBlog,
    loading,
  } = useContext(BlogContext);

  console.log(props.tagName, "   dsfsdfsdfdsf ", props.category);

  const renderLoading = () => {
    return (
      <div className="flex items-center justify-center">
        <CircularProgress />
      </div>
    );
  };

  const renderBlogCard = () => {
    const BlogData = props.category
      ? getCategorySpecificData(props.category)
      : getKeywordSpecificBlog(props.tagName);

    const BlogView = BlogData.map((blog) => (
      <BlogCard blogDetails={blog}></BlogCard>
    ));
    return <div className="blog-list">{BlogView}</div>;
  };

  return (
    <div className="flex flex-2" style={{ background: "#f2f2f2" }}>
      {loading ? renderLoading() : renderBlogCard()}
    </div>
  );
};

export default BlogList;
