import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {getHotel}  from '../actions/hotel';
import { Link } from 'react-router-dom';
import _ from 'lodash'

import  './listhotel.css'

class ListHotel extends Component {

  componentDidMount() {
    this.props.getHotel();
  }

  render() {
    console.log(this.props.hotel);

    const hotelBlock = this.props.hotel.map((data, i) => {
      return (<div key={i} className="hotel__block">
        <Link to={`/about-hotel/${data.property_code}`} className="hotel-content">
          <img src={_.head(data.images).url} alt=""/>
          <h4 className='hotel-content__title'>
            {data.property_name}
          </h4>
          <p className="hotel-content__text">{data.total_price.amount}$</p>
          <p>Go to hotel page</p>
        </Link>
      </div>)
    });


    return (
      <div className="content">
        {hotelBlock}
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    hotel: state.hotel
  }
}

export default connect(mapStateToProps, {getHotel})(ListHotel);
