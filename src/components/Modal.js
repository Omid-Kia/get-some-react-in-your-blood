import React from 'react';
import { connect } from 'react-redux'

class Modal extends React.Component {

  render() {
    if (this.props.modal.isOpen) {
      return(
        <div style={{border: '1px solid #000'}}>
          {this.props.children}
        </div>
      )
    } else {
      return null
    }

  }
}
export default connect(state => ({modal: state.modal}))(Modal)
