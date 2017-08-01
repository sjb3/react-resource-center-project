import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

// Material UI
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'

import injectTapEventPlugin from 'react-tap-event-plugin'
// Basic CSS
import './App.css'

injectTapEventPlugin()

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { open: false }
  }

  handleClose = () => this.setState({ open: false })

  render () {
    return (
      <BrowserRouter>
        <div>
          <AppBar
            title='Title'
            iconClassNameRight='muidocs-icon-navigation-expand-more'
            onLeftIconButtonTouchTap={() =>
              this.setState({ open: !this.state.open })}
          />
          <Drawer
            open={this.state.open}
            docked={false}
            onrequestChange={open => this.setState({ open })}
          >
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/'>Home</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/logos'>Logos</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/posters'>Posters</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/letterhead'>Letterhead</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/share-a-story'>Share A Story</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/service-request-form'>Service Request Form</Link>
            </MenuItem>
            <MenuItem onTouchTap={this.handleClose}>
              <Link to='/tutorial'>Tutorial</Link>
            </MenuItem>
          </Drawer>

          <Route exact path='/' render={() => <h1>HOME</h1>} />
          <Route
            exact
            path='/logos-posters'
            render={() => <h1>LOGOS and POSTERS</h1>}
          />
          <Route exact path='/logos' render={() => <h1>LOGOS</h1>} />
          <Route exact path='/posters' render={() => <h1>POSTERS</h1>} />
          <Route exact path='/letterhead' render={() => <h1>LETTERHEAD</h1>} />
          <Route
            exact
            path='/share-a-story'
            render={() => <h1>Share a Story</h1>}
          />
          <Route
            exact
            path='/planning-guide'
            render={() => <h1>Planning Guide</h1>}
          />
          <Route exact path='/services' render={() => <h1>SERVICES</h1>} />
          <Route exact path='/glossary' render={() => <h1>Glossary</h1>} />
          <Route
            exact
            path='/service-request-form'
            render={() => <h1>Service REQUEST FORM</h1>}
          />
          <Route exact path='/tutorial' render={() => <h1>TUTORIAL</h1>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
