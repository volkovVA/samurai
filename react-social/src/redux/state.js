const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
  _addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.newText);
    } else if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const body = this._state.dialogsPage.newMessageText;
      this._state.dialogsPage.newMessageText = '';
      this._state.dialogsPage.messages.push({id: 6, message: body});
      this._callSubscriber(this._state);
    }
  }
}

export const addPostActionCreater = () => {
  return {
    type: ADD_POST
  }
}

export const updateNewPostTextActionCreater = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text 
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

export default store;
window.store = store;