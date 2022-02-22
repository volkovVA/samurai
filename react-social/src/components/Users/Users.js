import React from "react";
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/avatar2.png';

const Users = ({ users, follow, unfollow, setUsers }) => {

  const getUsers = () =>  {
    if (users.length === 0) {
      axios
        .get('https://social-network.samuraijs.com/api/1.0/users')
        .then(response => {
          setUsers(response.data.items)
        })
    }
  }

  return (
    <div>
      <button onClick={getUsers}>Get Users</button>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <img src={user.photos.small !== null ? user.photos.small : userPhoto} className={styles.userPhoto} alt="avatar" />
                </div>
                <div>
                  {user.followed
                    ? <button onClick={ () => unfollow(user.id) }>Unfollow</button>
                    : <button onClick={ () => follow(user.id) }>Follow</button>
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