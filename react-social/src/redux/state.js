import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

const store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hello! How are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 15}
      ],
      newPostText: ''
    },
    dialogsPage: {
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
  },
  _callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  }
}

export default store;
window.store = store;