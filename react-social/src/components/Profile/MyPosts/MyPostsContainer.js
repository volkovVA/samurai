import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  const state = props.store.getState();

  const addPost = () => {
    props.store.dispatch(addPostActionCreater());
  }

  const onPostChange = (text) => {
    props.store.dispatch(updateNewPostTextActionCreater(text));
  }

  return <MyPosts
    updateNewPostText={onPostChange}
    addPost={addPost}
    posts={state.profilePage.posts}
    newPostText={state.profilePage.newPostText} />
}

export default MyPostsContainer;