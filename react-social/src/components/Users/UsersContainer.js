import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  setCurrentPageActionCreater,
  setTotalUsersCountActionCreater
} from "../../redux/users-reducer";

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage
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
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageActionCreater(pageNumber))
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountActionCreater(totalCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users);