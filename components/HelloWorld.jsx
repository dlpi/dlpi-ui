import React, { Component } from 'react'

export default class HelloWorld extends Component {
  render () {
    const {setGreeting} = this.props
    return (
      <div className='helloworld'>
          {this.props.greeting}
          <button onClick={() => setGreeting('Hello Universe')} >Change</button>
      </div>
    )
  }
}

HelloWorld.propTypes = {
  greeting: React.PropTypes.string.isRequired,
  setGreeting: React.PropTypes.func.isRequired
}
