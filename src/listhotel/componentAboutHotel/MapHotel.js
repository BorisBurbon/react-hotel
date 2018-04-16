import React, {Component} from 'react';
import GoogleMapReact from 'google-map-react'
import  '../listhotel.css'

const AnyReactComponent = ({text}) => <div className="google-icons">{ text }</div>;

class MapHotel extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 14
  };
  render() {
    return (
      <div className="about-hotel__map" style={{height: '400px', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyBJ2n-pBl_-IRzhGA7MTpIG3udWuY1DM7k"}}
          center={{lat: this.props.data.location.latitude, lng: this.props.data.location.longitude}}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={this.props.data.location.latitude}
            lng={this.props.data.location.longitude}
            text={''}
          />
        </GoogleMapReact>
        <div className="contact-block">
          <h4 className='title'>Address:</h4>
          <ul>
            <li>City: {this.props.data.address.city}</li>
            <li>Street: {this.props.data.address.line1}</li>
            <li>Region: {this.props.data.address.region}</li>
            <li>Postal code: {this.props.data.address.postal_code}</li>
            <li>Country: {this.props.data.address.country}</li>
          </ul>
        </div>
      </div>
    )
  }
}

export default MapHotel;
