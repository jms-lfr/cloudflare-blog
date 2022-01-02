import React, { useEffect, useState } from "react";
import { Link } from "@gatsbyjs/reach-router";

const Post = ({ id }) => {
  const [post, setPost] = useState({});

  useEffect(() => {
    const getPost = async () => {
      const resp = await fetch(
        `https://blog-api.jms-lfr.workers.dev/api/posts/${id}`
      );
      const postResp = await resp.json();
      setPost(postResp);
    };

    getPost();
  }, [id]);

  if (!Object.keys(post).length) return <div />;

  if(!(post.image)){
  return (
    <><div class="backbutton">
        <Link to="/">Go home</Link>
    </div>
    <div class="submitbutton">
        <Link to="/submit">!Submit a post</Link>
    </div>
    <center>
        <div>
          <h1>{post.title}</h1>
          <h4>{post.username}</h4>
          <p>{post.content}</p>
          <p>
            <em>Published {new Date(post.date).toLocaleString()}</em>
          </p>
        </div>
      </center></>
  );
  } else {
    return (
      <>
      <div class="backbutton">
          <Link to="/">Go home</Link>
      </div>
      <div class="submitbutton">
          <Link to="/submit">!Submit a post</Link>
      </div>
      <div class="posts">
        <h1>{post.title}</h1>
        <h4>{post.username}</h4>
        <p>{post.content}</p>
        <p><img src={post.image} alt="" class="image"/></p>
        <p>
           <em>Published {new Date(post.date).toLocaleString()}</em>
        </p>
      </div>
      </>
    );
  }
};

export default Post;