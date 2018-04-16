import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {getHotel}  from '../../Actions/hotel';
import ListHotelBlock from './ListHotelBlock'

import  './listhotel.css'

class ListHotel extends Component {
  //componentDidMount() {
    //this.props.getHotel();
  //}
  render() {
    return (
      <ListHotelBlock dataHotel={this.props.hotel}/>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hotel: state.hotel
  }
};

export default connect(mapStateToProps, {getHotel})(ListHotel);
