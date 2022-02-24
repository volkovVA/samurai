import React from "react";
import styles from './Users.module.css';
import userPhoto from '../../assets/img/avatar2.png';
import { NavLink } from "react-router-dom";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  const pages = [];

  for (let i = 0; i <= pagesCount; i++) {
    pages.push(i+1);
  }

  return (
    <div>
      <div>
        {
          pages.map((page, idx) => {
            return (
              <span
                className={props.currentPage === page ? styles.selectedPage : ''} key={idx}
                onClick={ () => props.onPageChanged(page) }
              >
                { page }
              </span>
            )
          })
        }
      </div>
      {
        props.users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <NavLink to={'/profile/' + user.id}>
                    <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
                  </NavLink>
                </div>
                <div>
                  {user.followed
                    ? <button onClick={ () => props.unfollow(user.id) }>Unfollow</button>
                    : <button onClick={ () => props.follow(user.id) }>Follow</button>
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

export default Users;