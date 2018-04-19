import React from 'react';
import {connect} from 'react-redux';
import Select from 'material-ui/Select';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Input from 'material-ui/Input';
import Button from 'material-ui/Button';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import  {getSearchHotel}  from '../../Actions/hotel';

import './filter.css'
import 'react-datepicker/dist/react-datepicker.css';


class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      city: '',
      radius: '',
      currency: '',
      price: '',
      checkIn: moment(),
      checkOut: moment().add(3, 'days'),
    });
    this.handleChangeCity = this.handleChangeCity.bind(this);
    this.handleChangeDateOut = this.handleChangeDateOut.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCurrency = this.handleChangeCurrency.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeRadius = this.handleChangeRadius.bind(this);
  }

  //Change select City
  handleChangeCity = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  //Change select Currency
  handleChangeCurrency = event => {
      this.setState({[event.target.name]: event.target.value});
  };

  //Change select Radius
  handleChangeRadius = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  //Change DatePicker In
  handleChangeDate(date) {
    this.setState({
      checkIn: date
    });
  }

  //Change DatePicker Out
  handleChangeDateOut(date) {
    this.setState({
      checkOut: date
    });
  }

  //Change select Maximum Price in Hotel
  handleChangePrice = event => {
    this.setState({price: event.target.value});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  handleOpen = () => {
    this.setState({open: true});
  };

  // Submit search Hotel
  filterSubmit = () => {
    let payload = {
      city: this.state.city,
      checkIn: this.state.checkIn.format('YYYY-MM-DD'),
      checkOut: this.state.checkOut.format('YYYY-MM-DD'),
      currency: this.state.currency,
      price: this.state.price,
      radius: this.state.radius
    };
   this.props.getSearchHotel(payload);
  };

  render() {
    return (
      <div className="container">
        <form autoComplete="off" className="filter">
          <ul className="cb-slideshow">
            <li><span>Image 01</span></li>
            <li><span>Image 02</span></li>
            <li><span>Image 03</span></li>
          </ul>
          <FormControl className='city-select-block'>
            <InputLabel htmlFor="controlled-open-select">City</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.city}
              onChange={this.handleChangeCity}
              className="filter-select"
              inputProps={{
                name: 'city',
                id: 'controlled-open-select',
              }}
            >
              <MenuItem value='LWO'>Lviv Airport</MenuItem>
              <MenuItem value='IEV'>Kiev Airport</MenuItem>
              <MenuItem value='VSG'>Luhansk Airport</MenuItem>
              <MenuItem value='KGO'>Kropyvnytskyi Airport</MenuItem>
              <MenuItem value='BOM'>Mumbai</MenuItem>
            </Select>
          </FormControl >
          <FormControl className='date-picker-label'>
            <InputLabel htmlFor="controlled-open-select">Date In</InputLabel>
            <DatePicker
              className="date-picker-select"
              selected={this.state.checkIn}
              onChange={this.handleChangeDate}
            />
          </FormControl>
          <FormControl className='date-picker-label'>
            <InputLabel htmlFor="controlled-open-select">Date Out</InputLabel>
            <DatePicker
              className="date-picker-select"
              selected={this.state.checkOut}
              onChange={this.handleChangeDateOut}
            />
          </FormControl>
          <FormControl className='city-select-block'>
            <InputLabel htmlFor="controlled-open-select">Radius</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.radius}
              onChange={this.handleChangeRadius}
              className="filter-select"
              inputProps={{
                name: 'radius',
                id: 'radius-open-select',
              }}
            >
              <MenuItem value='1'>1</MenuItem>
              <MenuItem value='2'>2</MenuItem>
              <MenuItem value='5'>5</MenuItem>
              <MenuItem value='10'>10</MenuItem>
            </Select>
          </FormControl >
          <FormControl className='city-select-block'>
            <InputLabel htmlFor="controlled-open-select">Max price</InputLabel>
            <Input
              type="number"
              className="filter-input"
              value={this.state.price}
              onChange={this.handleChangePrice}
            />
          </FormControl >
          <FormControl className='city-select-block'>
            <InputLabel htmlFor="controlled-open-select">Currency</InputLabel>
            <Select
                open={this.state.open}
                onClose={this.handleClose}
                onOpen={this.handleOpen}
                value={this.state.currency}
                onChange={this.handleChangeCurrency}
                className="filter-select"
                inputProps={{
                    name: 'currency',
                    id: 'currency-open-select',
                }}
            >
              <MenuItem value='USD'>USD</MenuItem>
              <MenuItem value='EUR'>EURO</MenuItem>
              <MenuItem value='UAH'>UAH</MenuItem>
            </Select>
          </FormControl >
          <FormControl className="formControl">
            <Button variant="raised" className="filter-btn" onClick={this.filterSubmit}>
              Send
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    hotel: state.hotel
  }
};

const mapDispatchToProps = {
  getSearchHotel
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)