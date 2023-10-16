import React from 'react'
import "../pages/HomePage.scss";
import Banner from '../layout/Banner';
import Footer from '../layout/Footer';
import ApartmentGrid from '../components/ApartmentGrid';
import Navbar from '../components/Navbar';







function HomePage() {
  return (
    <>
      <Navbar />
      <Banner />
      <ApartmentGrid />
      <Footer />
    </>
  );

}

export default HomePage