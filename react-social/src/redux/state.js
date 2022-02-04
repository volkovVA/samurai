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
      ]
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
    if (action.type === 'ADD-POST') {
      this._addPost();
    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._updateNewPostText(action.newText);
    }
  }
}

export default store;
window.store = store;