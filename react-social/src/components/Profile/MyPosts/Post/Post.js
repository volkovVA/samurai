import React from "react";
import classes from './Post.module.css';
import avatar from '../../../../assets/img/avatar.jpg';

const Post = (props) => {
  return (
    <li className={classes.item}>
      <img src={avatar} alt="avatar" />
      {props.message}
      <div>{props.likesCount}</div>
    </li>
  )
}

export default Post;