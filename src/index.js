import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import JadwalContextProvider from './JadwalContext';

ReactDOM.render(
  <React.StrictMode>
    <JadwalContextProvider >
      <App />
    </JadwalContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
