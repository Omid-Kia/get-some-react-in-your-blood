import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import store from './store'
import Login from './containers/Login';

function App() {
  return (
    <div className="App">
      <Modal>
      <Login/>
    </Modal>
    </div>
  );
}

export default App;
