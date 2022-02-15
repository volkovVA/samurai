import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const Profile = (props) => {
  return (
    <Row>
      <Col>
        <ProfileInfo />
        <MyPostsContainer store={props.store} />
      </Col>
    </Row>
  )
}

export default Profile;