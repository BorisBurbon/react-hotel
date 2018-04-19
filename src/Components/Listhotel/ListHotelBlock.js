import React from 'react';
import {Link} from 'react-router-dom';
import _ from 'lodash'

import  './listhotel.css'


const ListHotelBlock = ({dataHotel, LinkAboutHotel}) => {

  return (
    <div className="content">
      {
        _.map(dataHotel, (data, i) => {
          return (<div key={i} className="hotel__block">
            <Link to={`/about-hotel/${data.property_code}`}
                  className="hotel-content"
                  onClick={LinkAboutHotel.bind(this,(data.property_code))}
            >
              {
                //check in photo array
                !data.images.length ? '': <img src={_.head(data.images).url} alt=''/>
              }
              <h4 className='hotel-content__title'>
                {data.property_name}
              </h4>
              <p className="hotel-content__text">{data.total_price.amount}$</p>
              <p>Go to hotel page</p>
            </Link>
          </div>)
        })
      }
    </div>
  )
};

export default ListHotelBlock;

