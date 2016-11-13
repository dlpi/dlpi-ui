import React, { Component } from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import App from './App.jsx'
import About from '../components/About.jsx'
import Settings from '../components/Settings.jsx'
import SettingsResin from '../components/Settings/Resin.jsx'
import SettingsPrinter from '../components/Settings/Printer.jsx'
import NoMatch from '../components/NoMatch.jsx'

export default class Root extends Component {
  render () {
    const { store } = this.props
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <Router history={browserHistory}>
            <Route path='/' component={App}>
              <Route path='about' component={About}/>
              <Route path='settings' component={Settings}>
                <Route path='printer' component={SettingsPrinter}/>
                <Route path='resin' component={SettingsResin}/>
              </Route>
              <Route path='*' component={NoMatch}/>
            </Route>
          </Router>
        </MuiThemeProvider>
      </Provider>
    )
  }
}

Root.propTypes = {
  store: React.PropTypes.object
}
