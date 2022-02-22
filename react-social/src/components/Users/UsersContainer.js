import Users from "./Users";
import { connect } from "react-redux";
import { followActionCreater, setUsersActionCreater, unfollowActionCreater } from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followActionCreater(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreater(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreater(users))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);