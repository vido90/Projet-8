import React, { useState }from 'react';
import './DescriptionPanel.scss';
import arrow from '../assets/images/arrow.png';

export function DescriptionPanel(props) {

  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }
  return (
    <div className={`description__panel ${isContentVisible ? 'open' : 'closed'}`}>
      <p className='description__title' onClick={showContent}>
        <span>{props.title}</span>
        <img
          src={arrow}
          alt='Arrow'
          className={`arrow ${isContentVisible ? 'up' : 'down'}`}
        />
      </p>
      {isContentVisible && <p className='description__content'>{props.content}</p>}
    </div>
  )
}