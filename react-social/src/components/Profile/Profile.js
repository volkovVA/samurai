import React from 'react';
import { Row, Col } from 'react-bootstrap';
import classes from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
  return (
    <Row>
      <Col>
        <h2>Main content</h2>
        <div>
          ava + description
        </div>
        <MyPosts />
      </Col>
    </Row>
  )
}

export default Profile;