import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbar'>
        <div className='navbar__logo'>
            <img src='LOGO.png' alt='Logo'></img> 
        </div>
        <div>Accueil</div>
        <div>A propos</div>
    </nav>
  )
}

export default Navbar