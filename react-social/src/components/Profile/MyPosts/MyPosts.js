import React from "react";
// import classes from './MyPosts.module.css';
import Post from './Post/Post';
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";

const MyPosts = (props) => {

  const postsElements = props.posts
    .map(post => <Post message={post.message} likesCount={post.likesCount} />)

  const newPostElement = React.createRef();

  const handlerAddPost = () => {
    props.dispatch(addPostActionCreater());
  }

  const handlerPostChange = () => {
    const text = newPostElement.current.value;
    props.dispatch(updateNewPostTextActionCreater(text));
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
          value={props.newPostText}
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