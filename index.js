import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import configureStore from './store/configureStore'
import Root from './containers/Root.jsx'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const store = configureStore()

render(
  <AppContainer><Root store={store}/></AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./containers/Root.jsx', () => {
    require('./containers/Root.jsx')
    render(
      <AppContainer><Root store={store}/></AppContainer>,
      document.getElementById('root')
    )
  })
}
