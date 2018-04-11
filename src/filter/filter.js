import React from 'react';
import Input from 'material-ui/Input';
import {connect} from 'react-redux';
import Select from 'material-ui/Select';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import  {getSearchHotel}  from '../actions/hotel';
import moment from 'moment';

import './filter.css'



class Filter extends React.Component {

  constructor(props) {
    super(props);
    let now = moment().format('YYYY-MM-DD');
    this.state = {
      city: '',
      checkIn: now,
      checkOut: now,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleChangeDate = event => {
    this.setState({[event.target.name]: event.target.value});
  };
  handleChangeDateOut= event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  filterSubmit = () => {
    console.log('form submited', this.state);
    getSearchHotel(this.state);
    const payload = {
      city: this.state.city,
      checkIn: this.state.checkIn,
      checkOut: this.state.checkOut,
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
          <FormControl className={classes.formControl}>
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
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="date"
              label="Date begin"
              type="date"
              defaultValue={this.state.dataStart}
              value={this.state.dataStart}
              className={classes.textField}
              name="checkIn"
              onChange={this.handleChangeDate}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <TextField
              id="date-end"
              label="Date Out"
              type="date"
              defaultValue={this.state.dataOut}
              value={this.state.dataOut}
              className={classes.dataOut}
              name="checkOut"
              onChange={this.handleChangeDateOut}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </FormControl>
          {/*<FormControl className={classes.formControl}>*/}
            {/*<InputLabel htmlFor="4">Filtel input 4</InputLabel>*/}
            {/*<Input*/}
              {/*placeholder="Placeholder"*/}
              {/*className={classes.input}*/}
              {/*inputProps={{*/}
                {/*'aria-label': 'Description',*/}
                {/*id: '4'*/}
              {/*}}*/}
            {/*/>*/}
          {/*</FormControl>*/}

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