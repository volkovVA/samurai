import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <span>No foto!!!</span>;
  }

  return (
    <div>
      <img src={props.profile.photos.small} alt="avatar" />
      <p>{props.profile.fullName}</p>
      <ProfileStatusWithHooks
        status={props.status}
        updateStatus={props.updateStatus}
      />
    </div>
  );
};

export default ProfileInfo;
