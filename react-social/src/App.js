import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './App.css';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import ProfileContainer from './components/Profile/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';

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
            <Route path='/profile' render={() => <ProfileContainer />} />
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
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