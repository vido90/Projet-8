import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import './ApartmentPage.scss';
import { ImageCaroussel } from '../components/ImageCaroussel';
import { useParams } from 'react-router-dom'; // Utilisation de useParams
// import { DescriptionPanel } from '../components/DescriptionPanel';
import { ApartmentHeader } from '../components/ApartmentHeader';
import { DescriptionPanel } from '../components/DescriptionPanel';


function ApartmentPage() {

    const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID de l'appartement
   
    const [selectedFlat, setSelectedFlat] = useState();



    useEffect(() => {
        fetch('../data.json')
            .then(response => response.json())
            .then(flats => {
                const flat = flats.find(flat => flat.id === (id));
                setSelectedFlat(flat);
                
            })
            .catch(error => console.error('Erreur : ', error));
    }, [id]);
   

    return (
        <>
            <Navbar />
        
            {selectedFlat && (
                <div className='apartment-page'>
                    <ImageCaroussel pictures={selectedFlat.pictures} />
                    <ApartmentHeader 
                        title={selectedFlat.title} 
                        location={selectedFlat.location} 
                        tags={selectedFlat.tags} 
                        name={selectedFlat.host.name}
                        picture={selectedFlat.host.picture}
                    />
                    <div className='apartment_description__area'>
                        <div className='area_col'>
                            <DescriptionPanel title="Description" content={selectedFlat.description} />
                        </div>
                        <div className='area_col'>
                            <DescriptionPanel 
                            title="Equipements" 
                            content={selectedFlat.equipments.map((eq, i) => (
                                <li key={i}>{eq}</li>
                            ))}
                            />
                        </div>
                        
                        
                    </div>
                </div>
                    
            )}
         
            <Footer />
        </>
    );
}

export default ApartmentPage;