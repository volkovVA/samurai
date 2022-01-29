import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './Navbar.module.css';

const Navbar = () => {
  return (
    <ul className={`${classes.navbar} flex-column`}>
      <li><NavLink to="profile" activeClassName={classes.active}>Profile</NavLink></li>
      <li><NavLink to="dialogs" activeClassName={classes.active}>Dialogs</NavLink></li>
      <li><NavLink to="news" activeClassName={classes.active}>News</NavLink></li>
      <li><NavLink to="music" activeClassName={classes.active}>Music</NavLink></li>
      <li><NavLink to="settings" activeClassName={classes.active}>Settings</NavLink></li>
    </ul>
  )
}

export default Navbar;