import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Dialogs.module.css';

const PersonItem = ({name, id}) => {
  return (
    <li className={`${classes.personItem} ${classes.active}`}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  )
}

const MessagesItem = ({message}) => {
  return (
    <li className="messagesItem">{message}</li>
  )
}

const Dialogs = () => {
  return (
    <div className={classes.dialogs}>
      <ul className="personList">
        <PersonItem name="Slava" id="1" />
        <PersonItem name="Elena" id="2" />
        <PersonItem name="Bred" id="3" />
        <PersonItem name="Angelina" id="4" />
      </ul>
      <ul className="messagesList">
        <MessagesItem message="Hello! How are you?" />
        <MessagesItem message="Hi! I'm fine. Thanks. And you?" />
        <MessagesItem message="I'm OK" />
      </ul>
    </div>
  )
}

export default Dialogs;