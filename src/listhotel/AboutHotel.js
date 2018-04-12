import {connect} from 'react-redux';
import React, {Component} from 'react';
import Header from '../header/header.js';
import _ from 'lodash'


class AboutHotel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      property_name: ''
    }

  }


  render() {
    let hotel = _.head(_.filter(this.props.hotelList.hotel, { 'property_code': this.props.match.params.id}));
    console.log(hotel);

      return (
        <div className="about-hotel">
          <Header />
          <div className="about-hotel__top">
          </div>
          {!hotel ? 'нет данных' :
            <div className="about-hotel__container">
              <h2>{hotel.property_name}</h2>
              <h5>Amenities</h5>
              {
                _.map(hotel.amenities, function (item, key) {
                  return  <li key={key}>{item.amenity}</li>;
                })
              }
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
