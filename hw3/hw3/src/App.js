import React, { useState, useReducer } from "react";
import UserBar from './UserBar'
import PostList from "./PostList";
import CreatePost from "./CreatePost";

function App() {
  // const [user, setUser] = useState("");
  const [user, dispatchUser] = useReducer(userReducer, "");
  // const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}, {title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  //const posts = [{title: 'A Blog Post', content: 'Blog post content', author: 'Paul'}]
  
  function userReducer(state, action) {
    switch (action.type) {
      case "LOGIN":
      case "REGISTER":
        return action.username;
      case "LOGOUT":
        return "";
      default:
        return state;
    }
  }
    

  // const [posts, setPosts] = useState([])
  const [posts, dispatchPosts] = useReducer(postReducer, [])

  function postReducer(state, action) {
    switch (action.type) {
      case 'CREATE_TODO': 
      const newTodo = {
        title: action.title,
        content: action.content,
        author: action.author,
        dateCreated: action.dateCreated,
        dateCompleted: action.dateCompleted, 
        complete: action.complete,
        };
        return [newTodo , ...state];
      default:
        return state;
    }
  }

  return (
    <div>
      <UserBar user={user} dispatchUser={dispatchUser} />
      {user && <CreatePost user={user} posts={posts} dispatchPosts={dispatchPosts} />}
      <PostList dispatchPosts={dispatchPosts} posts={posts} />
    </div>
  );
}

export default App;
