import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], dispatchPosts }) {
  function updatePosts(index, newPost) {
    const updatedState = [...posts] //...  makes a copy of an array
    updatedState[index] = newPost

    dispatchPosts(updatedState);
  }
  
  return (
    <div>
      {posts.map((p, i) => (
        // <Post title={p.title} content={p.content} author={p.author} key={"post-" + i} />
        <Post {...p} updatePosts={updatePosts} index={i} key={"post-" + i} />
      ))}
    </div>
  );
}
