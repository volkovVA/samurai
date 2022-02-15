import React from "react";
import { addPostActionCreater, updateNewPostTextActionCreater } from "../../../redux/profile-reducer";
import StoreContext from "../../../store-context";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          const state = store.getState();

          const addPost = () => {
            store.dispatch(addPostActionCreater());
          }
        
          const onPostChange = (text) => {
            store.dispatch(updateNewPostTextActionCreater(text));
          }

          return <MyPosts
            updateNewPostText={onPostChange}
            addPost={addPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
        }
      }
    </StoreContext.Consumer>
  ) 
}

export default MyPostsContainer;