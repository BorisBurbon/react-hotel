import {connect} from 'react-redux';
import React, {Component} from 'react';
import Header from '../../Components/Header/Header';
import _ from 'lodash'

import AboutHotelMap from './AboutHotelMap'
import AboutHotelAmenities from './AboutHotelAmenities'
import AboutHotelRoom from './AboutHotelRoom'

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
              <AboutHotelAmenities data={hotel}/>
              <AboutHotelRoom data={hotel}/>
              <AboutHotelMap data={hotel}/>
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
