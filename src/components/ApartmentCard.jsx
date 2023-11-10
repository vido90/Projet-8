import React from 'react';
import './ApartmentCard.scss';
import Apartment from './Apartment';
import { useEffect, useState} from 'react'; 




function ApartmentCard() {
  const [apartment, setApartment] = useState([])

  useEffect(() => {  
    fetch('./data.json')
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        setApartment(jsonData)
        console.log(jsonData)
      })
      .catch(error => console.error('Erreur : ', error))    
  }, [])


  return (
    <div className='grid'> 
      {apartment.map((apartment) => 
        <Apartment key={apartment.title} imgurl={apartment.cover} id={apartment.id} title={apartment.title}/>
        )}
      
    

    </div>
  )
}

export default ApartmentCard