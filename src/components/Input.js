
import React from 'react';

export default class Input extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''};
  }

  changeHandler = event => {
    event.persist()
    this.setState({value: event.target.value}, () => {
      console.log(event.target);
        this.props.onChange(this.props.name, event.target.value)
    })

  }

  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
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
