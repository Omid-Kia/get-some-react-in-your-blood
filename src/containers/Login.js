import React from 'react';
import Form from '../components/Form';
import { postUserInfo } from '../api';

export default class Login extends React.Component {

submitHandler = (event) => {
  alert("Surprise motherfucker");
  console.log(event);
  postUserInfo(event)

}
  render() {
    return(
      <Form onSubmit={this.submitHandler} fields={[{name: 'username', type: 'text', required: true},{name: 'password', type: 'password', required: true}]} />
    )
  }
}
