import {useRouter} from "next/router";
import React from "react";

const BlogPostsPage = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>the blog posts</h1>
    </div>
  );
};

export default BlogPostsPage;
