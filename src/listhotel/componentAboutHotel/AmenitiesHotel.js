import React, {Component} from 'react';
import _ from 'lodash'
import  '../listhotel.css'

class AmenitiesHotel extends Component {
  render() {
    return (
      <div className="about-hotel__container">
        <h2 className="main-title">{this.props.data.property_name}</h2>
        <div className="hotel-info">
          <div className="hotel-info__img">
            <img src={_.head(this.props.data.images).url} alt=""/>
          </div>
          <div className="hotel-info__content">
            <h2 className="title">Amenities</h2>
            <ul>
              {
                _.map(this.props.data.amenities, function (item, key) {
                  return <li key={key}>{item.amenity}</li>;
                })
              }
            </ul>
          </div>
        </div>
      </div>

    );
  }
}


export default AmenitiesHotel;
