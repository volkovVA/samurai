import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';

const App = () => {
  return (
    <Container>
      <Row className='bg-primary'>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm={4} className='bg-info'>
          <Navbar />
        </Col>
        <Col sm={8} className='bg-light'>
          {/* <Profile /> */}
          <Dialogs />
        </Col>
      </Row>
    </Container>
  );
}

export default App;