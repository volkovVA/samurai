import React from "react";
import Post from './Post/Post';
// import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";

const MyPosts = (props) => {

  const postsElements = props.posts
    .map((post, idx) => <Post message={post.message} likesCount={post.likesCount} key={idx} />)

  const newPostElement = React.createRef();

  const handlerAddPost = () => {
    props.addPost();
  }

  const handlerPostChange = () => {
    const text = newPostElement.current.value;
    props.updateNewPostText(text);
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