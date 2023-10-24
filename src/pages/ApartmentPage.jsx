import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import './ApartmentPage.scss';
import { ImageBanner } from '../components/ImageBanner';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { DescriptionPanel } from '../components/DescriptionPanel';
import { useParams } from 'react-router-dom'; // Utilisation de useParams


function ApartmentPage() {
    const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID de l'appartement
    const [selectedFlat, setSelectedFlat] = useState(null);

    useEffect(() => {
        fetch('../data.json')
            .then(response => {
                return response.json()
                  })
                  .then(flats => {
                    const flat = flats.find(flat => flat.id === parseInt(id)); // conversion de l'ID en nombre et comparer
                setSelectedFlat(flat);
                console.log(flats);
                  })
                  .catch(error => console.error('Erreur : ', error))    
    }, [id])


    return (selectedFlat != null && 
        <>
            <Navbar />
            <div className='apartment-page'>
                <ImageBanner imageUrl={selectedFlat.cover} />
                <ApartmentHeader title={selectedFlat.title} location={selectedFlat.location} />
                <div className='appartment__description__area'>
                    <DescriptionPanel title="Description" content={selectedFlat.description} />
                    <DescriptionPanel title="Équipements" content={selectedFlat.amenities} />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ApartmentPage;