import React from "react";
import styles from './Users.module.css';

const Users = ({ users, follow, unfollow, setUsers }) => {

  if (users.length === 0) {
    setUsers(
      [
        { id: 1,
          photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612',
          followed: false,
          fullName: 'Dmitry', status: 'I am Developer',
          location: {city: 'Moscow', country: 'Russia'} },
        { id: 2,
          photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612',
          followed: true,
          fullName: 'Elena',
          status: 'I am Recruter',
          location: {city: 'St.Petersburg', country: 'Russia'} },
        { id: 3,
          photoUrl: 'https://media.baamboozle.com/uploads/images/58350/1593220552_125612',
          followed: false,
          fullName: 'Alex',
          status: 'I am CEO',
          location: {city: 'Minsk', country: 'Belarus'} }
      ]
    )
  }

  return (
    <div>
      {
        users.map(user => {
          return (
            <div key={user.id}>
              <span>
                <div>
                  <img src={user.photoUrl} className={styles.userPhoto} alt="avatar" />
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
                  <div>{user.fullName}</div>
                  <div>{user.status}</div> 
                </span>
                <span>
                  <div>{user.location.country}</div>
                  <div>{user.location.city}</div>
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