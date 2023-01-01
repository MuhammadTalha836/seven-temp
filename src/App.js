
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import NavBar from './New/components/NavBar';
import Home from './New/components/Home';
import Cards from './New/components/Cards';
import Testimonial from './New/components/Testimonial';
import Facts from './New/components/Facts';
import 'antd/dist/reset.css';
import About from './New/components/About';
import Footer from './New/components/Footer';
import Terms from './New/components/Terms';
import Privacy from './New/components/Privacy';

function App() {


  //for page animations 
  const [windowDim, SetwindowDim] = useState({ width: window.innerWidth, Height: window.innerHeight });

  const detectSize = () => {
    SetwindowDim({ width: window.innerWidth, Height: window.innerHeight });
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)
    return () => {
      window.addEventListener('resize', detectSize)
    };
  }, [windowDim]);


  useEffect(() => {
    AOS.init({
      duration: 2000
    });
  },);

  return (

    <div>

      <NavBar />
      <Home />
      <About />
      <Cards />
      <Testimonial />
      <Facts />
      <Footer />

    </div>
  );
}

export default App;