import React from 'react';
import Form from '../components/Form';

export default class Login extends React.Component {

submitHandler = (event) => {
  alert("Surprise motherfucker");

}
  render() {
    return(
      <Form onSubmit={this.submitHandler} fields={[{name: 'username', type: 'text', required: true},{name: 'password', type: 'password', required: true}]} />
    )
  }
}
