import React from 'react';
import starActive from '../assets/images/star-active.png'
import starInactive from '../assets/images/star-inactive.png'
import '../components/StarsRating.scss';

/* function StarsRating({ rating }) {
    const stars = [];
  
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<img key={i} src={starActive} alt="Active Star" />);
      } else {
        stars.push(<img key={i} src={starInactive} alt="Inactive Star" />);
      }
    }
  
    return <div className="stars-rating">{stars}</div>;
  }
  
  export default StarsRating; */


 const StarsRating = ({ rating }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? starActive : starInactive}
        alt={`star-${i}`}
      />
    );
  }

  return <div className="stars-rating">{stars}</div>;
};

export default StarsRating;