import React from "react";
import {Link} from 'react-navi'

function Post({ title, content, author, id, dateCreated, dateCompleted, complete, short = false }) {
    function handleCheckBox(event){
        const newPost = {
            title,
            content,
            author,
            dateCreated,
            dateCompleted: Date.now(),
            complete: event.target.checked
        }

        console.log("checkbox clicked");
    }


  let processedContent = content

  if (short) {
    if (content.length > 30) {
      processedContent = content.substring(0, 30) + '...'
    }
  }


  return (
    <div>
      <Link href={`/post/${id}`}><h3>{title}</h3></Link>

      <div>{processedContent}</div>
      <br />
        <br />
        Completed: {complete}
        <br/>
        Date Created: {dateCreated}
        <br/>
        Date Completed: {dateCompleted}
      <i>
        Written by <b>{author}</b>
      </i>
        <div>
            <br />
            <Link href={`/post/${id}`}>View full post</Link>
        </div>
        }
        <br/>
        <input type="checkbox" value={complete} onChange={handleCheckBox}/>
    </div>
  );
}

export default React.memo(Post)
