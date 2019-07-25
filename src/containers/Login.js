import React from 'react';
import Form from '../components/Form';

export default class Login extends React.Component {

  render() {
    return(
      <Form fields={[{name: 'username', type: 'text'},{name: 'password', type: 'password'}]} />
    )
  }
}
