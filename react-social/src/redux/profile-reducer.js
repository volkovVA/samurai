import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const DELETE_POST = "DELETE_POST";

const initialState = {
  posts: [
    { id: 1, message: "Hello! How are you?", likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 15 },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      const newPost = {
        id: 5,
        message: action.newPostText,
        likesCount: 0,
      };
      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        posts: state.posts.filter((post) => post.id !== action.postId),
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreater = (newPostText) => {
  return {
    type: ADD_POST,
    newPostText,
  };
};

export const setUserProfile = (profile) => {
  return {
    type: SET_USER_PROFILE,
    profile,
  };
};

export const deletePost = (postId) => {
  return {
    type: DELETE_POST,
    postId,
  };
};

export const getUserProfile = (userId) => async (dispatch) => {
  const response = await usersAPI.getProfile(userId);

  dispatch(setUserProfile(response.data));
};

export const setStatus = (status) => {
  return {
    type: SET_STATUS,
    status,
  };
};

export const getStatus = (userId) => async (dispatch) => {
  const response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatus = (status) => async (dispatch) => {
  const response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
};

export default profileReducer;
