import React, { useState }from 'react';
import './DescriptionPanel.scss';

export function DescriptionPanel(props) {

  const [isContentVisible, setIsContentVisible] = useState(false);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }
  return (
    <div className={`description__panel ${isContentVisible ? 'open' : 'closed'}`}>
    <p className='description__title' onClick={showContent}>
        <span>{props.title}</span>
        <i className={`fa-solid ${isContentVisible ? 'fa-chevron-up' : 'fa-chevron-down'}`}></i>
    </p>
    {isContentVisible && <p className='description__content'>{props.content}</p>}
    </div>
  )
}
