import React from "react";
import Post from "./Post";

export default function PostList({ posts = [] }) {



  return (
    <div>
      {posts.map((p, i) => (
        <Post short={true} id={p.id} title={p.title} content={p.content} author={p.author} complete={p.complete} dateCompleted={p.dateCompleted} dateCreated={p.dateCreated} key={"post-" + i} />
      ))}
    </div>
  );
}
