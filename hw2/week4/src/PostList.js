import React from "react";
import Post from "./Post";

export default function PostList({ posts = [], setPosts }) {
  function updatePosts(index, newPost) {
    const updatedState = [...posts] //...  makes a copy of an array
    updatedState[index] = newPost

    setPosts(updatedState);
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
