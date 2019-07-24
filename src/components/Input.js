
import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }

  changeHandler = event => {
    this.setState({value: event.target.value})
  }

  render() {
    return (
      <div>
        <input
          type = {this.props.type}
          onChange = {this.changeHandler}
          name = {this.props.name}
        />
      <h3>{this.state.value}</h3>
      </div>
    )
  }
}
