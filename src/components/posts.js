import React, { useEffect, useState } from "react";
import { Link } from "@gatsbyjs/reach-router";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      const resp = await fetch(
        "https://blog-api.jms-lfr.workers.dev/api/posts"
      );
      const postsResp = await resp.json();
      setPosts(postsResp);
    };

    getPosts();
  }, []);

  return (
    <>
    <div class="backbutton">
        <Link to="/">Go home</Link>
    </div>
    <div class="submitbutton">
        <Link to="/submit">!Submit a post</Link>
    </div>
    <div class="posts">
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>
            <Link to={`/posts/${post.id}`}>{post.title}</Link><br></br><font size="2"> by {post.username}</font>
          </h2>
          <hr></hr>
         </div>
      ))}
    </div>
    </>
  );
};

export default Posts;