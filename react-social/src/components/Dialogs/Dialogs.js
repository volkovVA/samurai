import React from "react";
import classes from './Dialogs.module.css';

import PersonItem from "./PersonItem/PersonItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = ({people, messages}) => {

  const peopleElements = people
    .map(person => <PersonItem name={person.name} id={person.id} />)

  const messagesElements = messages
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