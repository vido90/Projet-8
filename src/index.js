import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HomePage from './pages/HomePage';
import {createBrowserRouter, RouterProvider } from "react-router-dom";
import ApartmentPage from './pages/ApartmentPage';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path:"/",
    element: <HomePage />,
    errorElement: <ErrorPage />,
  },
  {
    path:"flat/:id", 
    element: <ApartmentPage />

  },
  {
    path:"about",
    element: <About />

  },

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

