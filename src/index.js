import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import allData from './components/redux/reducers/reducer';

const data = createStore(allData)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={data}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
