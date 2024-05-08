import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './apps/App';
import { ContextProvider } from './contexts/ContextProvider';

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
