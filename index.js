import { AppContainer } from 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import Root from './containers/Root.jsx'

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
