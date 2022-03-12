import React from "react";
import classes from "./Dialogs.module.css";
import PersonItem from "./PersonItem/PersonItem";
import MessageItem from "./MessageItem/MessageItem";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { maxLengthCreator, required } from "../../utils/validators/validators";

const Dialogs = (props) => {
  const state = props.dialogsPage;

  const peopleElements = state.people.map((person) => (
    <PersonItem name={person.name} id={person.id} key={person.id} />
  ));

  const messagesElements = state.messages.map((message) => (
    <MessageItem message={message.message} key={message.id} />
  ));

  const addNewMessage = (values) => {
    props.sendMessage(values.newMessageText);
  };

  if (!props.isAuth) return <Redirect to={"/login"} />;

  return (
    <div className={classes.dialogs}>
      <ul className="personList">{peopleElements}</ul>
      <ul className="messagesList">
        <div>
          {messagesElements}
          <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
      </ul>
    </div>
  );
};

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component={Textarea}
          validate={[required, maxLength50]}
          name="newMessageText"
          placeholder="Enter your message"
        />
        <button>Send</button>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
