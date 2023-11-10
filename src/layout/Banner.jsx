import React from 'react';
import './Banner.scss';


function Banner(props) {
  return (
    <div className='banner'>
        <img src={props.img} alt='banner' className='banner-image'/>
        {props.title && <div className='banner-title'><h1>{props.title}</h1></div>}
    </div>
  )
}

export default Banner


