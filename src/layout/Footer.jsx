import React from 'react'
import './Footer.scss';
import Logo from '../assets/images/LOGO blanc.png';

function Footer() {
  return (
    <footer>
      <div className='footer'>
        <div className='footer__logo'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='footer__text'>
            © 2020 Kasa. All rights reserved
        </div>
        
      </div>
    </footer>
  )
}

export default Footer

