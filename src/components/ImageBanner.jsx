import React from 'react';
import Apartment from '../assets/images/apartment.png';
import './ImageBanner.scss';

export function ImageBanner() {
  return (
    <div className='image__banner'>
    <img src={Apartment} alt='apartment'/>
</div>
  )
}