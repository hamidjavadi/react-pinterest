import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectPosts } from "../../data/store/post/selectors";
import Post from "../post/post";

function PostList() {
  const posts = useSelector(selectPosts);

  return (
    <div className="post-list">
      {posts.map((postItem, index) => (
        <Post key={index} post={postItem} />
      ))}
    </div>
  );
}

export default PostList;
