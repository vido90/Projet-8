import React from 'react';
import './Banner.scss';
import Plage from '../assets/images/plage.png';

function Banner() {
  return (
    <div className='banner'>
        <img src={Plage} alt='banner' className='banner-image'/>
        <h1>Chez vous, partout et ailleurs</h1>
    </div>
  )
}

export default Banner
