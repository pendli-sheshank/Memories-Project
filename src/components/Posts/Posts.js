import React from "react";
import { useSelector } from "react-redux";
import Post from "./Post/Post";
import useStyles from "./Styles";

const Posts = () => {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  // const classes = useStyles();

  return (
    <div>
      Posts
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
