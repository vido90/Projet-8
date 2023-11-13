import React from 'react';
import { Link, /* useLocation */ } from "react-router-dom";
import './ErrorPage.scss';
import Navbar from '../components/Navbar'; //Importation du navbar//
import Footer from '../layout/Footer';

function ErrorPage() {
  /* const location = useLocation(); */
 /*  const isApartmentPage = location.pathname.includes('/flat/');
  const isExactPath = location.pathname === '/'; */
  return (
    <>
  {/*   {isApartmentPage && isExactPath && <Navbar />} */}
  
  <Navbar />
    <main>
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </main>
    <Footer />
    </>
  )
}

export default ErrorPage