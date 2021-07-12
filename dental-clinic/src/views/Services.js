/** @format */

import React from "react";
import Service from "../components/Service";

const Services = ({ services }) => {
  return (
    <div className='services'>
      <div className='services-group'>
        <div className='services-title'>
          <h2>Our services</h2>
        </div>

        <div className='row row-cols-1 row-cols-md-3 g-4'>
          {services.map((service) => (
            <Service key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
