import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Paper from 'material-ui/Paper'
import Header from '../components/Header.jsx'
import HelloWorld from '../components/HelloWorld.jsx'
import ResinForm from '../components/ResinForm.jsx'
import * as HelloWorldActions from '../actions/HelloWorldActions'

const fakeSubmit = (values) => {
  console.log(values)
  return new Promise((resolve) => {
    setTimeout(resolve, 2000)
  })
}

class App extends Component {
  render () {
    const { children, greeting, actions } = this.props

    return (
      <div>
        <Header />
        <div className='container-fluid' style={{marginTop: '10px'}}>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <Paper zDepth={1} style={{padding: '10px', margin: '3px'}}>
                <ResinForm onSubmit={fakeSubmit} />
              </Paper>
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <Paper zDepth={1} style={{padding: '10px', margin: '3px'}}>
                <HelloWorld greeting={greeting} setGreeting={actions.setGreeting} />
              </Paper>
          </div>
          </div>
        </div>
        <Link to={`/settings/`}>Open Settings</Link>
        {children}
      </div>
    )
  }
}

App.propTypes = {
  children: React.PropTypes.node,
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
