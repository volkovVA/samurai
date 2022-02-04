const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const initialState = {
  people: [
    {id: 1, name: 'Slava'},
    {id: 2, name: 'Elena'},
    {id: 3, name: 'Bred'},
    {id: 4, name: 'Angelina'},
  ],
  messages: [
    {id: 1, message: 'Hello! How are you?'},
    {id: 2, message: 'Hi! I\'m fine. Thanks. And you?'},
    {id: 3, message: 'I\'m OK'}
  ],
  newMessageText: ''
}

const dialogsReducer = (state = initialState, action) => {
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