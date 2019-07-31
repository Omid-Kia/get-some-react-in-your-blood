import React from 'react';
import { connect } from 'react-redux'
import Login from './Login'
import Modal from '../components/Modal'
import { toggleModal } from '../actions';

class Main extends React.Component {
 showForm = () => {
    this.props.toggleModal()
  }
  render() {
    console.log(this.props);
    return(
      <div>
        <button onClick={this.showForm}> Login </button>
        <Modal><Login /></Modal>
      </div>
    )
  }
}
export default connect(state => ({modal: state.modal}), {toggleModal})(Main)
