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
  getState() {
    return this._state;
  },
  _callSubscriber() {
    console.log('State changed');
  },
  addPost() {
    const newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    }
  
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;