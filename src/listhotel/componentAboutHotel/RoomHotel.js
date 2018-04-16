import React, {Component} from 'react';
import _ from 'lodash'
import  '../listhotel.css'

class RoomHotel extends Component {
  render() {
    return (
      <div className="about-hotel__container">
        <h3 className="main-title">Room hotel</h3>
        <div className="hotel-info">
          <div className="hotel-info__content">
            <h2 className="title title-price">Prices -
              {this.props.data.total_price.amount}
              {this.props.data.total_price.currency}
              </h2>
            <h3>Descriptions: </h3>
            <ul>
              {
                _.map(this.props.data.rooms, function (item, key) {
                  return <li key={key}>{
                      _.map(item.descriptions, function (item, key) {
                      return <span key={key} className="info-room">{key+1}) {item}</span>;
                  })}</li>;
                })
              }
            </ul>
          </div>
          <div className="hotel-info__img">
            <img src={_.head(this.props.data.images).url} alt=""/>
          </div>
        </div>
      </div>

    );
  }
}


export default RoomHotel;
