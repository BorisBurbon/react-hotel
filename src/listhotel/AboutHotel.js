import {connect} from 'react-redux';
import React, {Component} from 'react';
import Header from '../header/header.js';
import _ from 'lodash'
import GoogleMapReact from 'google-map-react'

import  './listhotel.css'

const AnyReactComponent = ({ text }) => <div className="google-icons">{ text }</div>;


class AboutHotel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      property_name: ''
    }
  }
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 14
  };



  render() {
    let hotel = _.head(_.filter(this.props.hotelList.hotel, { 'property_code': this.props.match.params.id}));
    console.log(hotel);


      return (
        <div className="about-hotel">
          <Header />
          <div className="about-hotel__top">
          </div>
          {!hotel ? 'нет данных' :
            <div>
              <div className="about-hotel__container">
                <h2>{hotel.property_name}</h2>
                <h5>Amenities</h5>
                {
                  _.map(hotel.amenities, function (item, key) {
                    return  <li key={key}>{item.amenity}</li>;
                  })
                }
              </div>
              <div className="about-hotel__map" style={{ height: '400px', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: "AIzaSyBJ2n-pBl_-IRzhGA7MTpIG3udWuY1DM7k" }}
                  center = {{ lat: hotel.location.latitude, lng: hotel.location.longitude }}
                  defaultZoom={this.props.zoom}
                >

                  <AnyReactComponent
                    lat={hotel.location.latitude}
                    lng={hotel.location.longitude}
                    text={''}
                  />
                </GoogleMapReact>
              </div>
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
