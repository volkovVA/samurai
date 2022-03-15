import React from "react";
import { Row, Col } from "react-bootstrap";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
  return (
    <Row>
      <Col>
        <ProfileInfo
          profile={props.profile}
          status={props.status}
          updateStatus={props.updateStatus}
          isOwner={props.isOwner}
          savePhoto={props.savePhoto}
        />
        <MyPostsContainer />
      </Col>
    </Row>
  );
};

export default Profile;
