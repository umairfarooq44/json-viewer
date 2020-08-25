import React from 'react';
import { Provider } from 'react-redux';
import createStore from './store';
import HomePage from './Pages/Home';
import './App.css';

const store = createStore([]);

function App() {
  return (
    <Provider store={store}>
      <HomePage />
    </Provider>
  );
}

export default App;
