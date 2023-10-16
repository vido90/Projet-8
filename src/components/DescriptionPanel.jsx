import React from 'react';
import './DescriptionPanel.scss';

export function DescriptionPanel() {
  return (
    <div className="description__panel">
    <p className='description__title'>
        <span>Description</span>
        <i class="fa-solid fa-chevron-up"></i>
    </p>
    <p className='description__content'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil, deleniti? 
        Expedita deleniti suscipit alias aliquid consequuntur sed eveniet quasi, 
        laboriosam esse quas laborum saepe in obcaecati ipsam reiciendis magni distinctio? 
        Cumque consequuntur ab fugiat, quae odio nemo, officia inventore suscipit delectus 
        temporibus eveniet, corrupti minima cupiditate accusantium illo quam deserunt.
    </p>
    </div>
  )
}
