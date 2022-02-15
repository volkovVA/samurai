import React from "react";
import classes from './Dialogs.module.css';
import PersonItem from "./PersonItem/PersonItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const peopleElements = state.people
    .map(person => <PersonItem name={person.name} id={person.id} />)

  const messagesElements = state.messages
    .map(message => <MessageItem message={message.message} />)

  const handlerMessageClick = () => {
    props.sendMessage();
  }

  const handlerMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessage(text);
  }

  return (
    <div className={classes.dialogs}>
      <ul className="personList">
        {peopleElements}
      </ul>
      <ul className="messagesList">
        <div>
          {messagesElements}
          <div>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="3"
              placeholder="Enter your message"
              value={state.newMessageText}
              onChange={handlerMessageChange} />
            <button onClick={handlerMessageClick}>Send</button>
          </div>
        </div>
      </ul>
    </div>
  )
}

export default Dialogs;