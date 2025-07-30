import React from 'react';
import logo from './assets/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <nav>
        <a href="#">Products        </a>
        <a href="#">Resources       </a>
        <a href="#">Developers       </a>
        <button className="open-app">Open App</button>
      </nav>
    </header>
  );
};

export default Header;
