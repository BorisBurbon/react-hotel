import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {getHotel}  from '../../Actions/hotel';
import ListHotelBlock from './ListHotelBlock'
import _ from 'lodash'

import  './listhotel.css'

class ListHotel extends Component {
  componentDidMount() {
    this.props.getHotel();
  }

  //Add Local Storage in in hotel
  // accept data - this id hotel. Filtered array hotels by id and JSON
  LinkAboutHotel = (data) => {
    console.log(data);
    let hotel = JSON.stringify(_.head(_.filter(this.props.hotel, { 'property_code': data})));
    localStorage.setItem('hotel', hotel);
  };

  render() {
    console.log(this.props.hotel);
    return (
      <ListHotelBlock dataHotel={this.props.hotel} LinkAboutHotel={this.LinkAboutHotel} />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hotel: state.hotel
  }
};

export default connect(mapStateToProps, {getHotel})(ListHotel);
