import React from 'react';
import Rate from '../assets/images/Rate.png'; 
import './ApartmentHeader.scss';

export function ApartmentHeader() {
  return (
    <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>Cozy Loft on the Canal Saint-Martin</h1>
                <h2>Paris, île de France</h2>
            </div> 
            <div className='apartment__tags'>
                <span>Cozy</span>
                <span>Canal</span>
                <span>Paris 10</span> 
            </div>
     
            <div className='apartment__owner'>
                <div className='apartment__owner__details'>
                    <h3>Alexandre Dumas</h3>
                    <div className='apartment__owner__badge'></div>
                </div>
                    <div className='apartment__owner__stars'>
                        <img src={Rate}  alt='etoile'/>
                    </div>
            </div>
        </div>
  )
}