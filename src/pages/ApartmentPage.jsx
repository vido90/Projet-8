import React from 'react'
import Navbar from '../components/Navbar'; //Importation du navbar//
import Footer from '../layout/Footer'; //Importation du footer//
import './ApartmentPage.scss';
import {ImageBanner} from '../components/ImageBanner';
import { ApartmentHeader} from '../components/ApartmentHeader';
import { DescriptionPanel } from '../components/DescriptionPanel';


function ApartmentPage() {
  return (
    <>
    <Navbar />
    <div className='apartment-page'>
        <ImageBanner />
        <ApartmentHeader />
        
        <div className='appartment__description__area'>
            <DescriptionPanel />
            <DescriptionPanel />
            
        </div>
    </div>
    <Footer />
    </>

  )
}


export default ApartmentPage



