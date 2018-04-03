import React from 'react';
import Input from 'material-ui/Input';
import './filter.css'


class Filter extends React.Component {
   render() {
    return (
      <div className={this.props.container}>
        <div className="filter">
          <Input
            defaultValue="Hello world"
            className={this.props.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            placeholder="Placeholder"
            className={this.props.input}
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            value="Disabled"
            className={this.props.input}
            disabled
            inputProps={{
              'aria-label': 'Description',
            }}
          />
          <Input
            defaultValue="Error"
            className={this.props.input}
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