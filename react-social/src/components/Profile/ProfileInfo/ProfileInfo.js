import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <span>No foto!!!</span>;
  }

  return (
    <div>
      <img src={profile.photos.small} alt="avatar" />
      <p>{profile.fullName}</p>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
