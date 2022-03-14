import profileReducer, {
  addPostActionCreater,
  deletePost,
} from "./profile-reducer";

const state = {
  posts: [
    { id: 1, message: "Hello! How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 15 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. test data
  const action = addPostActionCreater("it-kamasutra");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(3);
});

it("messages of new post should be correct", () => {
  // 1. test data
  const action = addPostActionCreater("it-kamasutra");

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts[2].message).toBe("it-kamasutra");
});

it("after deleting length of messages should be decrement", () => {
  // 1. test data
  const action = deletePost(1);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(1);
});

it("after deleting length of messages shouldn't be decrement if id is incorrect", () => {
  // 1. test data
  const action = deletePost(1000);

  // 2. action
  const newState = profileReducer(state, action);

  // 3. expectation
  expect(newState.posts.length).toBe(2);
});
