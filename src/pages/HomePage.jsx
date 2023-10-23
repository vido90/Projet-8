import React from 'react'
import "../pages/HomePage.scss";
import Banner from '../layout/Banner';
import Footer from '../layout/Footer';
import ApartmentGrid from '../components/ApartmentGrid';
import Navbar from '../components/Navbar';
import Plage from '../assets/images/plage.png';







function HomePage() {
  return (
    <>
      <Navbar />
      <Banner img={Plage} title='Chez vous, partout et ailleurs'/>
      <ApartmentGrid />
      <Footer />
    </>
  );

}

export default HomePage