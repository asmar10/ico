import React from "react";
import BlogList from "../../components/BlogList/BlogList";
import BlogPagination from "../../components/BlogPagination/BlogPagination";
import LayoutBlog from "../../layouts/LayoutBlog";

const Blog = () => {
  return (
    <LayoutBlog pageTitle={"Terms & Conditions"} item={"tnc"}>
      <BlogList />
      <BlogPagination />
    </LayoutBlog>
  );
};

export default Blog;
