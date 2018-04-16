import {connect} from 'react-redux';
import React, {Component} from 'react';
import Header from '../header/Header.js';
import _ from 'lodash'

import MapHotel from './componentAboutHotel/MapHotel'
import AmenitiesHotel from './componentAboutHotel/AmenitiesHotel'
import RoomHotel from './componentAboutHotel/RoomHotel'

import  './listhotel.css'


class AboutHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: ''
    }
  }
  
  render() {
    let hotel = _.head(_.filter(this.props.hotelList.hotel, { 'property_code': this.props.match.params.id}));

      return (
        <div className="about-hotel">
          <Header />
          <div className="about-hotel__top">
          </div>
          {!hotel ? 'нет данных' :
            <div>
              <AmenitiesHotel data={hotel}/>
              <RoomHotel data={hotel}/>
              <MapHotel data={hotel}/>
            </div>
          }
        </div>
      );
  }
}
const mapStateToProps = (state) => {
  return {
    hotelList: state
  }
};

export default connect(mapStateToProps)(AboutHotel);
