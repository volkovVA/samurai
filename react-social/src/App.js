import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';

const App = (props) => {
  return (
    <BrowserRouter>
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
          <Col sm={8} className='bg-warning'>
            <Route path='/profile' render={() => <Profile
              {...props.profilePage} 
              dispatch={props.dispatch} />} />
            <Route path='/dialogs' render={() => <Dialogs {...props.dialogsPage} />} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;