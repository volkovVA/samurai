import React from "react";
import { updateNewMessageTextActionCreater, sendMessageActionCreater } from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from '../../store-context';

const DialogsContainer = (props) => {
  return (
    <StoreContext.Consumer> 
      {
        (store) => {
          const state = store.getState().dialogsPage;

          const onMessageClick = () => {
            store.dispatch(sendMessageActionCreater());
          }
        
          const onMessageChange = (text) => {
            store.dispatch(updateNewMessageTextActionCreater(text));
          }

          return <Dialogs
            updateNewMessage={onMessageChange}
            sendMessage={onMessageClick}
            dialogsPage={state} />
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogsContainer;