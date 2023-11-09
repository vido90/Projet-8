import React from 'react';
import './ApartmentHeader.scss';
import StarsRating from '../components/StarsRating';

export function ApartmentHeader(props) {
    console.log("props in apartment header", props)

    const { title, location, tags, name, picture, rating} = props;
    // const flat = props.flat;
    // const name = flat.host.name;
    const [firstName, lastName] = name.split(" ")

   
  return (
    <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{title}</h1>
                <h2>{location}</h2>
                <div className='apartment__tags'>
    
                 {tags.map ((tag) => (
                    <span key={tag}>{tag}</span>
                ))} 
                </div>
            </div> 
           
     
            <div className='apartment__owner'>
            
                <div className='apartment__owner__details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3> 
                    <div className='apartment__owner__badge'>
                        <img src={ picture } alt="" />
                    </div>
                </div>
                    <div className='apartment__owner__stars'>
                        <StarsRating rating={rating} />
                        {/* {[1, 2, 3, 4, 5].map((num)=> 
                            <span key={num} className={rating && rating >= num ? "on" : ""}>
                                <img src={rate} alt={`star-${num}`} />
                            </span>
                        )} */}
                       
                    </div>
            </div>
    </div>
  )
}
