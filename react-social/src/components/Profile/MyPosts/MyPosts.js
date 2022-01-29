import React from "react";
// import classes from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      <h2>my post</h2>
      <div>
        <textarea name="post" id="post" cols="30" rows="3"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul>
        <Post message="Hi, how are you?" likesCount="15" />
        <Post message="It's my first post" likesCount="10" />
      </ul>
    </div>
  )
}

export default MyPosts;