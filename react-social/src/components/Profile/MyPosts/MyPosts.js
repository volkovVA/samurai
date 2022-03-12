import React from "react";
import Post from "./Post/Post";
import { reduxForm, Field } from "redux-form";
import {
  maxLengthCreator,
  required,
} from "../../../utils/validators/validators";
import { Textarea } from "../../common/FormsControls/FormsControls";

const maxLength10 = maxLengthCreator(10);

const MyPosts = (props) => {
  const postsElements = props.posts.map((post, idx) => (
    <Post message={post.message} likesCount={post.likesCount} key={idx} />
  ));

  const addNewPostForm = (props) => {
    return (
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            component={Textarea}
            name="newPostText"
            placeholder={"Enter your post"}
            validate={[required, maxLength10]}
          />
          <button>Add post</button>
          <button>Remove post</button>
        </div>
      </form>
    );
  };

  const AddNewPostFormRedux = reduxForm({ form: "ProfileaddNewPostForm" })(
    addNewPostForm
  );

  const handlerAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div>
      <h2>my post</h2>
      <AddNewPostFormRedux onSubmit={handlerAddPost} />
      <ul>{postsElements}</ul>
    </div>
  );
};

export default MyPosts;
