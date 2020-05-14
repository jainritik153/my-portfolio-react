import React, { useState, useEffect } from "react";
import { BlogData } from "../Data/BlogData";
import firebase from "../firebase";

export const BlogContext = React.createContext();
var db = firebase.firestore();

const BlogContextProvider = (props) => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getBlogData = async () => {
    let snapshot = await db.collection("BlogData").get();
    var firebaseData = snapshot.docs.map((doc) => doc.data());
    setBlogData(firebaseData);
    setLoading(false);
  };

  useEffect(() => {
    getBlogData();
  }, []);

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

  const getAllTags = () => {
    const tagList = blogData.map((blog) => blog.keywordarray);
    return [...new Set(tagList.flat())];
  };

  const getKeywordSpecificBlog = (keyword) => {
    return blogData.filter((blog) => blog.keywordarray.includes(keyword));
  };

  // console.log(filterKeywordSpecificBlog("hooks"));

  return (
    <BlogContext.Provider
      value={{
        blogData,
        loading,
        getCategorySpecificData,
        getAllCategory,
        getKeywordSpecificBlog,
        getAllTags,
      }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
