const SEND_MESSAGE = "SEND-MESSAGE";

const initialState = {
  people: [
    { id: 1, name: "Slava" },
    { id: 2, name: "Elena" },
    { id: 3, name: "Bred" },
    { id: 4, name: "Angelina" },
  ],
  messages: [
    { id: 1, message: "Hello! How are you?" },
    { id: 2, message: "Hi! I'm fine. Thanks. And you?" },
    { id: 3, message: "I'm OK" },
  ],
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      const body = action.newMessageText;
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }],
      };
    }

    default:
      return state;
  }
};

export const sendMessageActionCreater = (newMessageText) => {
  return {
    type: SEND_MESSAGE,
    newMessageText,
  };
};

export default dialogsReducer;
