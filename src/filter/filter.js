
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Input from 'material-ui/Input';
import './filter.css'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing.unit,
  },
});

function Filter(props) {
  const { classes } = props;
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

Filter.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Filter);