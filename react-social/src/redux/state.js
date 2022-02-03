let renderEntireTree = () => {
  console.log('State changed');
}

const state = {
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
}

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  }

  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  renderEntireTree(state);
}

export const updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}

export const subscribe = (observer) => {
  renderEntireTree = observer;
}

export default state;