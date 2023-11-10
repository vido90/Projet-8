import React from 'react';
import starActive from '../assets/images/star-active.png'
import starInactive from '../assets/images/star-inactive.png'
import '../components/StarsRating.scss';

const StarsRating = (props) => {
    const rating = props.rating;
    const range = [1, 2, 3, 4, 5];

    return (
        <div className='stars-rating'>
            {range.map((num) =>
                rating >= num ? 
                    <img key={num} className='star' src={starActive} alt={`star-${num}`} /> 
                    : <img key={num} className='star grey' src={starInactive} alt={`star-${num}`} />
            )}
        </div>
    )
}

export default StarsRating;
