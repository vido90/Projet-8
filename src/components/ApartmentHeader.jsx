import React from 'react';
import Rate from '../assets/images/Rate.png'; 
import './ApartmentHeader.scss';

export function ApartmentHeader(props) {
    console.log("props in apartment header", props)

    const flat = props.flat;
    const name = flat.host.name;
    const [firstName, lastName] = name.split("")
  return (
    <div className='apartment__header'>
            <div className='apartment__title'>
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>
            </div> 
            <div className='apartment__tags'>
                {props.flat.tags.map ((tag) => (
                    <span>{tag}</span>
                    ))}
            </div>
     
            <div className='apartment__owner'>
                <div className='apartment__owner__details'>
                    <h3>
                        <span>{firstName}</span>
                        <span>{lastName}</span>
                    </h3>
                    <div className='apartment__owner__badge'>
                        <img src={ flat.host.picture } alt="" />
                    </div>
                </div>
                    <div className='apartment__owner__stars'>
                        <img src={Rate}  alt='etoile'/>
                    </div>
            </div>
        </div>
  )
}