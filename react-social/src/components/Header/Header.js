import React from "react";
import logo from "../../assets/logo/logo.png";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <a href="/#">
        <img src={logo} alt="logo" width="30" height="30" />
      </a>
      <h1>Social network</h1>
      <div className={styles.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login}
            &nbsp;&nbsp;<button onClick={props.logout}>Logout</button>
          </div>
        ) : (
          <NavLink to={"./login"}>Login</NavLink>
        )}
      </div>
    </header>
  );
};

export default Header;
