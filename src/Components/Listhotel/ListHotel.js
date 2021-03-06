import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import _ from 'lodash'

import  {getHotel}  from '../../Actions/hotel';
import ListHotelBlock from './ListHotelBlock'
import ListHotelBlockEmpty from './ListHotelBlockEmpty'

import  './listhotel.css'

class ListHotel extends Component {
  constructor(props) {
    super(props);
    // default options Upload Main page
    this.state = {
      city: 'IEV',
      checkIn: moment().add(10, 'days').format('YYYY-MM-DD'),
      checkOut: moment().add(15, 'days').format('YYYY-MM-DD')
    }
  }
  componentDidMount() {
    this.props.getHotel(this.state);
  }

  //Add Local Storage in in hotel
  // accept data - this id hotel. Filtered array hotels by id and JSON
  LinkAboutHotel = (data) => {
    let hotel = JSON.stringify(_.head(_.filter(this.props.hotel, { 'property_code': data})));
    localStorage.setItem('hotel', hotel);
  };

  render() {
    return (
      <div>
        {
          this.props.hotel.length?
            <ListHotelBlock dataHotel={this.props.hotel} LinkAboutHotel={this.LinkAboutHotel} />:
            // Empty Block - when empty search
            <ListHotelBlockEmpty />
        }
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hotel: state.hotel
  }
};

export default connect(mapStateToProps, {getHotel})(ListHotel);
