import React from 'react';
import logo from '../assets/img/logo.png';

const Header = () => {
  return (
    <header>
      <a href="/#">
        <img
          src={logo}
          alt="logo"
          width="30"
          height="30"
        />
      </a>
      <h1>Social network</h1>
    </header>
  )
}

export default Header;