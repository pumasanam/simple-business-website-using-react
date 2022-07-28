import React from 'react';
import './Home.css';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';

const Home = () => {
  return (
    <>
    <div className="test">
    <Navbar/>
    <Banner title="A Simple Business" span='Web Design' para='We Are Team Of Expert Web Developers' button='Get Started'/>
    </div>
    </>
  );
};

export default Home;
