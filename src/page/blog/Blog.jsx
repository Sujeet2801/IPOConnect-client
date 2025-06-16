import React from "react";
import BlogHome from "./BlogHome";
import { useAuth } from "../../hooks/useAuth";
import RequireLoginMessage from "../../utility/RequireLoginMessage";

function Blog() {
  const { user } = useAuth();

  return <div>{user ? <BlogHome /> : <RequireLoginMessage page="Blog" />}</div>;
}

export default Blog;
