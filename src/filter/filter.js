import React from 'react';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';
import './filter.css'


class Filter extends React.Component {
  // state = {
  //   city: '',
  //   open: false,
  // };
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      open: false,
    }
  }

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  filterSubmit = () => {
    console.log('form submited', this.state.city);
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
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="2">Filtel input 2</InputLabel>
            <Input
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
                id: '2',
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="3">Filtel input 3</InputLabel>
            <Input
              placeholder="Placeholder"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
                id: '3'
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="4">Filtel input 4</InputLabel>
            <Input
              placeholder="Placeholder"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
                id: '4'
              }}
            />
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="5">Filtel input 5</InputLabel>
            <Input
              placeholder="Placeholder"
              className={classes.input}
              inputProps={{
                'aria-label': 'Description',
                id: '5'
              }}
            />
          </FormControl>
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

export default Filter;