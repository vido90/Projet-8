import React from 'react'
import Navbar from '../components/Navbar'; //Importation du navbar//
import Footer from '../layout/Footer'; //Importation du footer//
import Banner from '../layout/Banner';
import './About.scss';
import Montagne from '../assets/images/Montagne.jpg';
import { DescriptionPanel } from '../components/DescriptionPanel';


function About() {
  return (
    <>
    <Navbar />
    <Banner img={Montagne} />
    <div className='about__container'>
      <DescriptionPanel title="Fiabilité" content="c'est un test"/>
      <DescriptionPanel title="Respect" content="c'est un test"/>
      <DescriptionPanel title="Service" content="c'est un test"/>
      <DescriptionPanel title="Responsabilité" content="c'est un test"/>
    </div>
    <Footer />
    </>
  )
}

export default About