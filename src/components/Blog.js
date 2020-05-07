import React from "react";
import BlogNavigation from "../components/BlogNavigation";
import BlogList from "./BlogList";
import BlogContextProvider from "../Contexts/BlogDataContext";
import Fade from "react-reveal/Fade";
import Banner from "./Banner";
import Footer from "../components/Footer";

const Blog = (props) => {
  const category = props.match.params.category;
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Banner
        title=""
        heading="Updates & Articles"
        description="Articles and blog posts on Web Development "
        bgColor="#ffffff"
      ></Banner>

      <BlogContextProvider>
        <BlogNavigation></BlogNavigation>
        <BlogList category={category}> </BlogList>
      </BlogContextProvider>
      <Footer bgColor="#f2f2f2"></Footer>
    </div>
  );
};

export default Blog;
