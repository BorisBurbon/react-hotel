import React from 'react';
import Input from 'material-ui/Input';
import {connect} from 'react-redux';
import Select from 'material-ui/Select';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import  {getSearchHotel}  from '../actions/hotel';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import './filter.css'
import 'react-datepicker/dist/react-datepicker.css';


class Filter extends React.Component {

  constructor(props) {
    super(props);
    this.state = ({
      city: '',
        currency: '',
      checkIn: moment(),
      checkOut: moment(),
    });
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeDateOut = this.handleChangeDateOut.bind(this);
    this.handleChangeDate = this.handleChangeDate.bind(this);
    this.handleChangeCurrency = this.handleChange.bind(this);
  }


  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };
    handleChangeCurrency = event => {
        this.setState({[event.target.name]: event.target.value});
    };

  handleChangeDate(date) {
    this.setState({
      checkIn: date
    });
  }

  handleChangeDateOut(date) {
    this.setState({
      checkOut: date
    });
  }


  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  filterSubmit = () => {
    console.log('form submited', this.state);

    const payload = {
      city: this.state.city,
      checkIn: this.state.checkIn.format('YYYY-MM-DD'),
      checkOut: this.state.checkOut.format('YYYY-MM-DD'),
        currency: this.state.currency
    };
    this.props.getSearchHotel(payload);

  };

  render() {
    const classes = this.props;
    return (
      <div className={classes.container}>
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
              onChange={this.handleChange}
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
          <FormControl className={classes.formControl}>
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
}


const mapDispatchToProps = {
  getSearchHotel
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter)