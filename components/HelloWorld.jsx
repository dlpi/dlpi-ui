import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import RaisedButton from 'material-ui/RaisedButton'
import request from 'superagent'

export default class HelloWorld extends Component {
  render () {
    const {setGreeting} = this.props
    return (
      <div className='helloworld'>
          <p>{this.props.greeting}</p>
          <br />
          <RaisedButton onClick={() => setGreeting('Hello Universe')} label='Change' />
          <br /><br />
          <Dropzone onDrop={this.onDrop}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
      </div>
    )
  }

  onDrop (files) {
    console.log('Received files: ', files)
    files.forEach((file) => {
      request
      .post('/api/upload/' + file.name)
      .send(file)
      .on('progress', function (e) {
        console.log('Percentage done: ', e.percent)
      })
      .end(function (err, res) {
        console.log(err, res)
        if (err) {
          console.error(err)
        } else {
          console.log(JSON.stringify(res.body))
        }
      })
    })
  }
}

HelloWorld.propTypes = {
  greeting: React.PropTypes.string.isRequired,
  setGreeting: React.PropTypes.func.isRequired
}
