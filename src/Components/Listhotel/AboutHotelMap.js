import React from 'react';
import GoogleMapReact from 'google-map-react'
//Import Config (googleMap key)
import config from '../../config';

// Import Style Map ang Address block
import  './listhotel.css'

// Add icon in Google Map
const AnyReactComponent = ({text}) => <div className="google-icons">{ text }</div>;

const AboutHotelMap = ({ data }) => {
  return (
    <div className="about-hotel__map" style={{height: '400px', width: '100%'}}>
      /*Google Map*/
      <GoogleMapReact
        bootstrapURLKeys={{key: config.googleMap.key}}
        center={{lat: data.location.latitude, lng: data.location.longitude}}
        defaultZoom={14}
      >
        <AnyReactComponent
          lat={data.location.latitude}
          lng={data.location.longitude}
          text={''}
        />
      </GoogleMapReact>
      /*Hotel Address Block*/
      <div className="contact-block">
        <h4 className='title'>Address:</h4>
        <ul>
          <li>City: {data.address.city}</li>
          <li>Street: {data.address.line1}</li>
          <li>Region: {data.address.region}</li>
          <li>Postal code: {data.address.postal_code}</li>
          <li>Country: {data.address.country}</li>
        </ul>
      </div>
    </div>
  )
};

export default AboutHotelMap;
