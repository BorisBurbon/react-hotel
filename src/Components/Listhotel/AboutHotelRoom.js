import React from 'react';
import _ from 'lodash'

import  './listhotel.css'

const AboutHotelRoom = ({data}) => {
    return (
      <div className="about-hotel__container">
        <h3 className="main-title">Room hotel</h3>
        <div className="hotel-info">
          <div className="hotel-info__content">
            <h2 className="title title-price">Prices -
              {data.total_price.amount}
              {data.total_price.currency}
              </h2>
            <h3>Descriptions: </h3>
            <ul>
              {
                _.map(data.rooms, function (item, key) {
                  return <li key={key}>{
                      _.map(item.descriptions, function (item, key) {
                      return <span key={key} className="info-room">{key+1}) {item}</span>;
                  })}</li>;
                })
              }
            </ul>
          </div>
          <div className="hotel-info__img">
            <img src={_.head(data.images).url} alt=""/>
          </div>
        </div>
      </div>
    );
}


export default AboutHotelRoom;
