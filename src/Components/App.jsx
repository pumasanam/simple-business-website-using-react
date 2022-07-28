import React from 'react';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Home/Home';
import Service from './Service/Service';
import About from './About/About';
import Contact from './Contact/Contact';
 
const App = () => {
   
  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/service" element={<Service/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
  );
};

export default App;
