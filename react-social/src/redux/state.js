const state = {
  profilePage: {
    posts: [
      {id: 1, message: 'Hello! How are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 15}
    ]
  },
  dialogsPage: {
    people: [
      [
        {id: 1, name: 'Slava'},
        {id: 2, name: 'Elena'},
        {id: 3, name: 'Bred'},
        {id: 4, name: 'Angelina'},
      ]
    ],
    messages: [
      {id: 1, message: 'Hello! How are you?'},
      {id: 2, message: 'Hi! I\'m fine. Thanks. And you?'},
      {id: 3, message: 'I\'m OK'}
    ]
  }
}

export default state;