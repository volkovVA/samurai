import React from "react";
import classes from './MessageItem.module.css';

const MessageItem = ({message}) => {
  return <li className="messagesItem">{message}</li>
}

export default MessageItem;