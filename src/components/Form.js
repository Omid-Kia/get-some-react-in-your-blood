import React from 'react';
import Input from './Input.js';


export default class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div>
        <Input type='username'/>
        <Input type='password'/>
      </div>

    )
  }
}
