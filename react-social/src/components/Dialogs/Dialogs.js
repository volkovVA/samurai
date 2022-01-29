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

const MessageItem = ({message}) => {
  return (
    <li className="messagesItem">{message}</li>
  )
}

const Dialogs = () => {

  const peopleData = [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Elena'},
    {id: 3, name: 'Bred'},
    {id: 4, name: 'Angelina'},
  ]

  const messagesData = [
    {id: 1, message: 'Hello! How are you?'},
    {id: 2, message: 'Hi! I\'m fine. Thanks. And you?'},
    {id: 3, message: 'I\'m OK'}
  ]

  const peopleElements = peopleData
    .map(person => <PersonItem name={person.name} id={person.id} />)

  const messagesElements = messagesData
    .map(message => <MessageItem message={message.message} />)

  return (
    <div className={classes.dialogs}>
      <ul className="personList">
        {peopleElements}
      </ul>
      <ul className="messagesList">
        {messagesElements}
      </ul>
    </div>
  )
}

export default Dialogs;