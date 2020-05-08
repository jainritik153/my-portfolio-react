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
    setLoading(true);
    console.log("state datta", blogData);
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

  return (
    <BlogContext.Provider
      value={{ blogData, loading, getCategorySpecificData, getAllCategory }}
    >
      {props.children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;
