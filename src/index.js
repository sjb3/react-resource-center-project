import React from 'react';
import { render } from 'react-dom';
// import './styles/index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import App from './App';

render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));
