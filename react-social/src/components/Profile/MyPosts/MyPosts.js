import React from "react";
// import classes from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = () => {

  const postData = [
    {id: 1, message: 'Hello! How are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post', likesCount: 15}
  ]

  const postsElements = postData
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