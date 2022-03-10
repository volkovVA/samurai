import React from "react";
import classes from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from "react-router-dom";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const peopleElements = state.people.map((person) => (
    <PersonItem name={person.name} id={person.id} key={person.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  const handlerMessageClick = () => {
    props.sendMessage();
  };

  const handlerMessageChange = (event) => {
    const text = event.target.value;
    props.updateNewMessage(text);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <ul className="personList">{peopleElements}</ul>
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
              onChange={handlerMessageChange}
            />
            <button onClick={handlerMessageClick}>Send</button>
          </div>
        </div>
      </ul>
    </div>
  );
};

export default Dialogs;
