import React from 'react'

const ServiceStorage = ({list}) => {
  return (
    <>
      <div className="servicestorage">
          <img src={list.img} alt="" />
          <div className="servicestorage_list">
          <h4>{list.title}</h4>
          <p>{list.para}</p>
          </div>
      </div>
    </>
  );
};

export default ServiceStorage;
