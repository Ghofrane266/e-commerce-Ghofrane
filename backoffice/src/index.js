import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {store} from './store/store'

import './index.css';
import App from './apps/App';
import { ContextProvider } from './contexts/ContextProvider';
import Router from './router/Router';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
