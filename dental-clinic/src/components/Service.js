/** @format */

import React from "react";

const service = ({ service }) => {
  return (
    <div className='col'>
      <div className='card'>
        <div className='service-img-bg'>
          <img
            src={require(`../assets/svg/${service.img}.svg`).default}
            alt='service-icon'
            className='service-icon'
          />
        </div>
        <div className='card-body'>
          <h5 className='card-title'>{service.title}</h5>
          <p className='card-text'>{service.body}</p>
        </div>
      </div>
    </div>
  );
};

export default service;
