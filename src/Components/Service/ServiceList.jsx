import React from 'react';
import ServiceStorage from "./ServiceStorage";
import ServiceData from './ServiceData';
import './Service.css';
import Navbar from '../Navbar/Navbar';
const ServiceList = () => {
  return (
    <>
    <Navbar/>
      <div className="servicelist">
        <h4 className='service_title'>Our Service</h4>
            <div className="servicedata">
            {ServiceData.map((list)=>{
                return <ServiceStorage list={list} key={list.id}/>
            })}
            </div>
      </div>
    </>
  );
};

export default ServiceList;

