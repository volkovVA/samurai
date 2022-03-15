import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../assets/img/avatar2.png";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, savePhoto }) => {
  if (!profile) {
    return <span>No foto!!!</span>;
  }

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  };

  return (
    <div>
      <img
        src={profile.photos.small || userPhoto}
        alt="avatar"
        className={styles.mainPhoto}
      />
      {isOwner && <input type={"file"} onChange={onMainPhotoSelected} />}
      <p>{profile.fullName}</p>
      <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
    </div>
  );
};

export default ProfileInfo;
