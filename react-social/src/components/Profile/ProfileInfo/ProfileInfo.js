import React from 'react';

const ProfileInfo = (props) => {

  if (!props.profile) {
    return <span>No foto!!!</span> 
  }
  
  return (
    <div>
      <img src={props.profile.photos.small} alt="avatar" />
      <p>{props.profile.fullName}</p>
    </div>
  )
}

export default ProfileInfo;