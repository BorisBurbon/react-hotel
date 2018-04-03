import React from 'react';
import Input from 'material-ui/Input';
import './filter.css'


class Filter extends React.Component {
   render() {
     const classes = this.props;
    return (
      <div className={classes.container}>
        <div className="filter">
          <Input
            defaultValue="Hello world"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            placeholder="Placeholder"
            className={classes.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            value="Disabled"
            className={classes.input}
            disabled
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            defaultValue="Error"
            className={classes.input}
            error
            inputProps={{
              'aria-label': 'Description',
            }}
          />
        </div>
      </div>
    );
  }
}

export default Filter;