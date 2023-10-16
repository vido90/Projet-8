import React from 'react';
import { Link } from "react-router-dom";
import './ErrorPage.scss';
import Navbar from '../components/Navbar'; //Importation du navbar//

function ErrorPage() {
  return (
    <>
    <Navbar />
    <main>
        <div className='error-page'>
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to="/">Retourner sur la page d'accueil</Link>
        </div>
    </main>
    </>
  )
}

export default ErrorPage