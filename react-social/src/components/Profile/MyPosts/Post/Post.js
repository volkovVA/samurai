import React from "react";
import classes from './Post.module.css';
import avatar from '../../../../assets/img/avatar.jpg';

const Post = () => {
  return (
    <li className={classes.item}>
      <img src={avatar} alt="avatar" />
      post 1
      <div>like</div>
    </li>
  )
}

export default Post;