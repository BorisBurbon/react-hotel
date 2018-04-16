import React from 'react';
import _ from 'lodash'
import  './listhotel.css'

const AboutHotelAmenities = ({ data }) => {
    return (
      <div className="about-hotel__container">
        <h2 className="main-title">{data.property_name}</h2>
        <div className="hotel-info">
          <div className="hotel-info__img">
            <img src={_.head(data.images).url} alt=""/>
          </div>
          <div className="hotel-info__content">
            <h2 className="title">Amenities</h2>
            <ul>
              {
                _.map(data.amenities, (item, key) => {
                  return <li key={key}>{item.amenity}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>

    );
};


export default AboutHotelAmenities;
