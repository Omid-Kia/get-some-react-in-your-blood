import React from 'react';
import Input from './Input.js';


export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  changeHandler = (name, value) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });

  }
  onSubmit = () => {

  }
  render() {
    return(
      <div>
        {this.props.fields.map(field =>
            <Input key={field.name} type={field.type} name={field.name} onChange = {this.changeHandler} value = {field.value || ''}/>
        )}
        <button onClick={this.onSubmit}> Login </button>
      </div>

    )
  }
}
