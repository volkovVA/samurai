import React from "react";
import { updateNewMessageTextActionCreater, sendMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
  const state = props.store.getState().dialogsPage;

  const onMessageClick = () => {
    props.store.dispatch(sendMessageActionCreater());
  }

  const onMessageChange = (text) => {
    props.store.dispatch(updateNewMessageTextActionCreater(text));
  }

  return <Dialogs
    updateNewMessage={onMessageChange}
    sendMessage={onMessageClick}
    dialogsPage={state} />
}

export default DialogsContainer;