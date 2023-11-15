import React, { useState } from 'react';
import './ImageCaroussel.scss';

export function ImageCaroussel(props) {
  const pictures=props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);

  const moveTonext = () => {
    setCurrentPicture((currentPicture + 1) % pictures.length);
  }

  const moveToprevious = () => {
    const newCurrentPicture = currentPicture - 1;
    if (newCurrentPicture < 0) {
      setCurrentPicture(pictures.length - 1);
      return;
    }
      
    setCurrentPicture(currentPicture - 1);
  }
  return (
    <div className='image__caroussel'>
      <div className='image__container'>
        
        {pictures.map((pic,i) => (
        <img key={pic} src={pic} alt="" className={currentPicture === i ? 'show' : '' }></img>
    ))}
      </div>

      {pictures.length > 1 && ( // Affiche le bouton seulement s'il y a plus d'une image
        <>
             <button className="btn btn-previous" onClick={moveToprevious}>
        <i className="fas fa-chevron-left"></i>
      </button>
      <span className="slide-counter">
        {currentPicture + 1} / {pictures.length}
      </span>
      <button className="btn btn-next" onClick={moveTonext}>
        <i className="fas fa-chevron-right"></i>
      </button>
        </>
      )}
      
      
</div>
  )
}