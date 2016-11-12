import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import HelloWorld from '../components/HelloWorld.jsx'
import * as HelloWorldActions from '../actions/HelloWorldActions'

class App extends Component {
  render () {
    const { greeting, actions } = this.props

    return (
      <div>
        <HelloWorld greeting={greeting} setGreeting={actions.setGreeting} />
      </div>
    )
  }
}

App.propTypes = {
  greeting: React.PropTypes.string,
  actions: React.PropTypes.object
}

function mapState (state) {
  return {
    greeting: state.helloworld.greeting
  }
}

function mapDispatch (dispatch) {
  return {
    actions: bindActionCreators(HelloWorldActions, dispatch)
  }
}

export default connect(mapState, mapDispatch)(App)
