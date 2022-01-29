import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = ({state}) => {
  return (
    <Row>
      <Col>
        <ProfileInfo />
        <MyPosts posts={state.posts} />
      </Col>
    </Row>
  )
}

export default Profile;