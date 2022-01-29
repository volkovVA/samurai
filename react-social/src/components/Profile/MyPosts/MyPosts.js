import React from "react";
// import classes from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = ({posts}) => {
  
  const postsElements = posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)

  return (
    <div>
      <h2>my post</h2>
      <div>
        <textarea name="post" id="post" cols="30" rows="3"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;