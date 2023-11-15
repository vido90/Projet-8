import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.scss';
import Logo from '../assets/images/LOGO.png';

function Navbar() {
  return (
    <header>
      <nav className='navbar'>
        <div className='navbar__logo'>
            <img src={Logo} alt='Logo' />
        </div>
        <NavLink to="/">
            <div>Accueil</div>
        </NavLink>
        
        <NavLink to="/about">
            <div>A propos</div>
        </NavLink>
      </nav>
      </header>
  )
}

export default Navbar;
