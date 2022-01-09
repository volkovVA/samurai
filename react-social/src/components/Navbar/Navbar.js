import React from "react";
import { Nav } from 'react-bootstrap';
// import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <Nav defaultActiveKey="#p" className="flex-column">
      <Nav.Link href="profile">Profile</Nav.Link>
      <Nav.Link eventKey="messages">Messages</Nav.Link>
      <Nav.Link eventKey="news">News</Nav.Link>
      <Nav.Link eventKey="music">Music</Nav.Link>
      <Nav.Link eventKey="settings">Settings</Nav.Link>
    </Nav>
  )
}

export default Navbar;