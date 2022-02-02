import React from 'react';
import { Row, Col } from 'react-bootstrap';
// import classes from './Profile.module.css';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';


const Profile = (props) => {
  return (
    <Row>
      <Col>
        <ProfileInfo />
        <MyPosts {...props} />
      </Col>
    </Row>
  )
}

export default Profile;