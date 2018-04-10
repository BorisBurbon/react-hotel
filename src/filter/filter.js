import React from 'react';
import Input from 'material-ui/Input';
import Select from 'material-ui/Select';
import './filter.css'

import {InputLabel} from 'material-ui/Input';
import {MenuItem} from 'material-ui/Menu';
import {FormControl} from 'material-ui/Form';
import Button from 'material-ui/Button';


class Filter extends React.Component {
  state = {
    name: '',
    open: false,
  };

  handleChange = event => {
    this.setState({[event.target.name]: event.target.value});
    console.log(event.target.value);
    console.log(event.target.name);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  render() {
    console.log(this.props.items)
    const classes = this.props;
    return (
      <div className={classes.container}>
        <form autoComplete="off" className="filter">
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="controlled-open-select">City</InputLabel>
            <Select
              open={this.state.open}
              onClose={this.handleClose}
              onOpen={this.handleOpen}
              value={this.state.name}
              onChange={this.handleChange}
              inputProps={{
                name: 'City',
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

        </form>
      </div>
    );
  }
}

export default Filter;