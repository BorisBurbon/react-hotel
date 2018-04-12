import React, {Component} from 'react';
import {connect} from 'react-redux';
import  {getHotel}  from '../actions/hotel';

import  './listhotel.css'

class ListHotel extends Component {

  componentDidMount() {
    this.props.getHotel();
  }

  render() {
    console.log(this.props.hotel);

    const hotelBlock = this.props.hotel.map((data, i) => {
      return (<div key={i} className="hotel__block">
        <div className="hotel-content">
          <img src="https://www.yana.kiev.ua/img/hotels/569/big/5731/1062507404.jpg" alt=""/>
          <h4 className='hotel-content__title'>
            {data.property_name}
          </h4>
          <p className="hotel-content__text">{data.total_price.amount}$</p>
          <p>{data.address.line1}</p>
          <p>tel: {data.contacts[0].detail}</p>

          <button className="btn hotel-content__btn">Reservation</button>
        </div>
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
