import React from 'react'
import "../pages/HomePage.scss";
import Banner from '../layout/Banner';
import Footer from '../layout/Footer';
import ApartmentCard from '../components/ApartmentCard';
import Navbar from '../components/Navbar';
import Plage from '../assets/images/plage.png';







function HomePage() {
  return (
    <>
      <Navbar />
      <Banner img={Plage} title='Chez vous, partout et ailleurs'/>
      <ApartmentCard />
      <Footer />
    </>
  );

}

export default HomePage