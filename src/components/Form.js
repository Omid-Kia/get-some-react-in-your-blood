import React from 'react';
import Input from './Input.js';


export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }
  changeHandler = (name, value) => {
    this.setState({ [name]: value }, () => {
      console.log(this.state);
    });

  }
  onSubmit = (event) => {
    event.preventDefault();
    let isValid = false
    console.log(this.state);
    this.props.fields.map(field =>{
      // console.log(field)
      console.log(this.state[field.name])
      // if field.required && field[value]
      if (field.required && this.state[field.name] === '') {
        alert(`${field.name} cannot be empty`);
        isValid = false
      } else {
        isValid = true
      }}
    )
    if (isValid) {
      this.props.onSubmit()
    }
  }
  render() {
    return(
      <div>
        {this.props.fields.map(field =>
            <Input key={field.name} type={field.type} name={field.name} onChange = {this.changeHandler} value = {field.value || ''}/>
        )}
        <button onClick={(e) => this.onSubmit(e)}> Login </button>
      </div>

    )
  }
}
