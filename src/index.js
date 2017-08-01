import React from 'react'
import { render } from 'react-dom'

import { MuiThemeProvider } from 'material-ui/styles'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import './index.css'
import App from './App'

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: '#21412a'
  },
  appBar: {
    height: 50
  }
})

render(
  <MuiThemeProvider miuTheme={muiTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
