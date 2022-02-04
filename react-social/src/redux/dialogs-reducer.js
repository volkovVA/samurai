const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const dialogsReducer = (state, action) => {
  switch(action.type) {
    case UPDATE_NEW_MESSAGE_TEXT:
      state.newMessageText = action.newText;
      return state;
    case SEND_MESSAGE:
      const body = state.newMessageText;
      state.newMessageText = '';
      state.messages.push({id: 6, message: body});
      return state;
    default:
      return state;
  }
}

export const sendMessageActionCreater = () => {
  return {
    type: SEND_MESSAGE
  }
}

export const updateNewMessageTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_MESSAGE_TEXT,
    newText: text 
  }
}

export default dialogsReducer;