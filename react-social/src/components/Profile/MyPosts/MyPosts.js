import React from "react";
import classes from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {
  return (
    <div>
      my post
      <div>
        <textarea name="post" id="post" cols="30" rows="3"></textarea>
        <button>Add post</button>
        <button>Remove post</button>
      </div>
      <ul>
        <Post />
        <Post />
      </ul>
    </div>
  )
}

export default MyPosts;