import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './lib/redux/init/store';
import { BrowserRouter } from "react-router-dom";
import './theme/styles/index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
     <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
