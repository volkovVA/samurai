import React from 'react';
import './App.css';
import { Container, Row, Col } from 'react-bootstrap';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

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
          <Profile />
        </Col>
      </Row>
    </Container>
  );
}

export default App;