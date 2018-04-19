import React, {Component} from 'react'

import Header from '../../Components/Header/Header'
import AboutHotelMap from './AboutHotelMap'
import AboutHotelAmenities from './AboutHotelAmenities'
import AboutHotelRoom from './AboutHotelRoom'

import  './listhotel.css'


class AboutHotel extends Component {

  render() {
    //Parse localStorage in array
    let returnHotel = JSON.parse(localStorage.getItem("hotel"));

      return (
        <div className="about-hotel">
          <Header />
          <div className="about-hotel__top">
          </div>
          {!returnHotel ? 'нет данных' :
            <div>
              <AboutHotelAmenities data={returnHotel}/>
              <AboutHotelRoom data={returnHotel}/>
              <AboutHotelMap data={returnHotel}/>
            </div>
          }
        </div>
      );
  }
}

export default AboutHotel;
