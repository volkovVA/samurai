const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';

const initialState = {
  users: [
    // {id: 1, photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612', followed: false, fullName: 'Dmitry', status: 'I am Developer', location: {city: 'Moscow', country: 'Russia'} },
    // {id: 2, photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612', followed: true, fullName: 'Elena', status: 'I am Recruter', location: {city: 'St.Petersburg', country: 'Russia'} },
    // {id: 3, photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612', followed: false, fullName: 'Alex', status: 'I am CEO', location: {city: 'Minsk', country: 'Belarus'} }
  ],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: true };
          }
          return user;
        })
      }

    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId) {
            return { ...user, followed: false };
          }
          return user;
        })
      }
    
    case SET_USERS:
      return { ...state, users: action.users };

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage };

    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.count };

    default: 
      return state;
  }
}

export const followActionCreater = (userId) => {
  return {
    type: FOLLOW,
    userId
  }
}

export const unfollowActionCreater = (userId) => {
  return {
    type: UNFOLLOW,
    userId
  }
}

export const setUsersActionCreater = (users) => {
  return {
    type: SET_USERS,
    users
  }
}

export const setCurrentPageActionCreater = (currentPage) => {
  return {
    type: SET_CURRENT_PAGE,
    currentPage
  }
}

export const setTotalUsersCountActionCreater = (totalUsersCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    count: totalUsersCount
  }
}

export default usersReducer;