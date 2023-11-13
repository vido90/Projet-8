import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../layout/Footer';
import './ApartmentPage.scss';
import { ImageCaroussel } from '../components/ImageCaroussel';
import { useParams } from 'react-router-dom'; // Utilisation de useParams
import { ApartmentHeader } from '../components/ApartmentHeader';
import { DescriptionPanel } from '../components/DescriptionPanel';
import ErrorPage from './ErrorPage'; // Importer la page d'erreur


function ApartmentPage() {

    const { id } = useParams(); // Utilisation de useParams pour récupérer l'ID de l'appartement
   
    const [selectedFlat, setSelectedFlat] = useState();

    const [error, setError] = useState(false); //Ajout d'un état pour gérer l'erreur


    useEffect(() => {
        fetch('../data.json')
            .then(response => response.json())
            .then(flats => {
                const flat = flats.find(flat => flat.id === (id));

                if (flat) {
                    setSelectedFlat(flat);
                } else {
                    setError(true); // définition de l'erreur si l'ID n'est pas trouvé 
                }
               
                
            })
            .catch(error => {
                console.error('Erreur : ', error);
                setError(true); //Définir l'erreur en cas d'erreur de chargement
            });
    }, [id]);
   

    return (
        error ? (
            <ErrorPage />
            ) : (
                <>
        <Navbar />

        <main>
                {selectedFlat && (
                    <div className='apartment-page'>
                        <ImageCaroussel pictures={selectedFlat.pictures} />
                        <ApartmentHeader 
                            title={selectedFlat.title} 
                            location={selectedFlat.location} 
                            tags={selectedFlat.tags} 
                            name={selectedFlat.host.name}
                            picture={selectedFlat.host.picture}
                            rating={selectedFlat.rating}
                        />
                        <div className='apartment_description__area'>
                            <div className='area_col'>
                                <DescriptionPanel 
                                    title="Description" 
                                    content={selectedFlat.description} />
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
            
        </main>

        <Footer />
        </>
                ) 
            
        
    );
}

export default ApartmentPage;