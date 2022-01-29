import React from "react";
import { NavLink } from 'react-router-dom';
import classes from './PersonItem.module.css';

const PersonItem = ({name, id}) => {
  return (
    <li className={`${classes.personItem} ${classes.active}`}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </li>
  )
}

export default PersonItem;