import React from "react";
import BlogNavigation from "../components/BlogNavigation";
import TagNavigation from "../components/TagNavigation";
import BlogList from "./BlogList";
import BlogContextProvider from "../Contexts/BlogDataContext";
import Fade from "react-reveal/Fade";
import Banner from "./Banner";
import Footer from "../components/Footer";

const Blog = (props) => {
  const category = props.match.params.category;
  const tagName = props.match.params.tagName;

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Banner
        title=""
        heading="Updates & Articles"
        description="Articles and blog posts on Web Development "
        bgColor="#ffffff"
      ></Banner>

      <BlogContextProvider>
        <BlogNavigation />
        <TagNavigation></TagNavigation>
        <BlogList category={category} tagName={tagName}></BlogList>
      </BlogContextProvider>

      <Footer bgColor="#f2f2f2"></Footer>
    </div>
  );
};

export default Blog;
