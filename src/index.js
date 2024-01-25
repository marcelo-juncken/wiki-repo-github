import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import GlobalStyles from './styles'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GlobalStyles>
          <App />
      </GlobalStyles>
  </React.StrictMode>
);
