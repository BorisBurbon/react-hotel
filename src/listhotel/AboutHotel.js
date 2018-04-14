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
                <h2 className="main-title">{hotel.property_name}</h2>
                <div className="hotel-info">
                  <div className="hotel-info__img">
                    <img src={_.head(hotel.images).url} alt=""/>
                  </div>
                  <div className="hotel-info__content">
                    <h2 className="title">Amenities</h2>
                    <ul>
                      {
                        _.map(hotel.amenities, function (item, key) {
                          return  <li key={key}>{item.amenity}</li>;
                        })
                      }
                    </ul>
                  </div>
                </div>
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
                <div className="contact-block">
                  <h4 className='title'>Address:</h4>
                  <ul>
                    <li>City: {hotel.address.city}</li>
                    <li>Street: {hotel.address.line1}</li>
                    <li>Region: {hotel.address.region}</li>
                    <li>Postal code: {hotel.address.postal_code}</li>
                    <li>Country: {hotel.address.country}</li>
                  </ul>
                </div>
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
