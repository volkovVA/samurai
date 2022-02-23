import React, { Component } from "react";
import * as axios from 'axios';
import Users from "./Users";
import { connect } from "react-redux";
import {
  followActionCreater,
  setUsersActionCreater,
  unfollowActionCreater,
  setCurrentPageActionCreater,
  setTotalUsersCountActionCreater
} from "../../redux/users-reducer";

class UsersContainer extends Component {
  
  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount - 17550);
    })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
    })
  }

  render() {
    return <Users
              totalUsersCount={this.props.totalUsersCount}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              onPageChanged={this.onPageChanged}
              users={this.props.users}
              follow={this.props.follow}
              unfollow={this.props.unfollow} />
  }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);