import React from 'react'
import Navbar from '../components/Navbar'; //Importation du navbar//
import Footer from '../layout/Footer'; //Importation du footer//
import { ImageBanner } from '../components/ImageBanner';
import { DescriptionPanel } from '../components/DescriptionPanel';
import './About.scss';


function About() {
  return (
    <>
    <Navbar />
    <ImageBanner />
    <div className='about__container'>
      <DescriptionPanel />
      <DescriptionPanel />
      <DescriptionPanel />
      <DescriptionPanel />
    </div>
    <Footer />
    </>
  )
}

export default About