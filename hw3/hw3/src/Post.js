import React from "react";

export default function Post({ title, content, 
  author, dateCreated, dateCompleted, complete, updatePosts, index}) {
  function handleCheckBox(event){
    const newPost = {
      title, 
      content,
      author,
      dateCreated,
      dateCompleted: Date.now(),
      complete: event.target.checked
    }

    updatePosts(index, newPost); 
    console.log("checkbox clicked");
  }

  return (
    <div>
      <h3>{title}</h3>
      <div>{content}</div>
      <br />
      Completed: {complete}
      <br/>
      Date Created: {dateCreated}
      <br/>
      Date Completed: {dateCompleted}
      <i>
        <br/>
        Written by <b>{author}</b>
      </i>
      <br/>
      <input type="checkbox" value={complete} onChange={handleCheckBox}/>
    </div>
  );
}
