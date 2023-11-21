import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';

import { MantineProvider, createTheme } from '@mantine/core';

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = createTheme({
  fontFamily: 'Open Sans, sans-serif',
  primaryColor: 'cyan',
});
root.render(
  <React.StrictMode>
    <MantineProvider theme={theme}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
