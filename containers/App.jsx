import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
    const { greeting, actions } = this.props

    return (
      <div>
        <Header />
        <div className='container-fluid' style={{marginTop: '10px'}}>
          <div className='row'>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <ResinForm onSubmit={fakeSubmit} />
            </div>
            <div className='col-xs-12 col-sm-6 col-md-4'>
              <HelloWorld greeting={greeting} setGreeting={actions.setGreeting} />
            </div>
          </div>
        </div>
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
