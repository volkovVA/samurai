import React, { Component } from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/avatar2.png';

class Users extends Component {

  componentDidMount() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items);
        console.log(response.data);
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

    const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    const pages = [];

    for (let i = 0; i < pagesCount; i++) {
      pages.push(i+1);
    }

    return (
      <div>
        <div>
          {
            pages.map((page, idx) => {
              return (
                <span
                  className={this.props.currentPage === page && styles.selectedPage} key={idx}
                  onClick={ (e) => this.onPageChanged(page) }
                >
                  { page }
                </span>
              )
            })
          }
        </div>
        {
          this.props.users.map(user => {
            return (
              <div key={user.id}>
                <span>
                  <div>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
                  </div>
                  <div>
                    {user.followed
                      ? <button onClick={ () => this.props.unfollow(user.id) }>Unfollow</button>
                      : <button onClick={ () => this.props.follow(user.id) }>Follow</button>
                    }
                  </div>
                </span>
                <span>
                  <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div> 
                  </span>
                  <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.city'}</div>
                  </span>
                </span>
              </div> 
            )
          })
        }
      </div>
    )
  }
}

export default Users;