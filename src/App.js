import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { store } from './store'
import Main from './containers/Main';
import Modal from './components/Modal';

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>

  );
}

export default App
