import React from "react";
// import classes from './MyPosts.module.css';

import Post from './Post/Post';

const MyPosts = ({posts, addPost, newPostText, updateNewPostText}) => {
  
  const postsElements = posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)

    const newPostElement = React.createRef();

    const handlerAddPost = () => {
      addPost();
    }

    const handlerPostChange = () => {
      const text = newPostElement.current.value;
      updateNewPostText(text);
    }

  return (
    <div>
      <h2>my post</h2>
      <div>
        <textarea 
          name="post" 
          id="post" 
          cols="30" 
          rows="3"
          ref={newPostElement}
          value={newPostText}
          onChange={handlerPostChange}
        />
        <button onClick={ handlerAddPost }>Add post</button>
        <button>Remove post</button>
      </div>
      <ul>
        {postsElements}
      </ul>
    </div>
  )
}

export default MyPosts;