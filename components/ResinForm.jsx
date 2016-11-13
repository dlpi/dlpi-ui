import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import FlatButton from 'material-ui/FlatButton'
import { TextField } from 'redux-form-material-ui'

const validate = values => {
  const errors = {}
  const requiredFields = [ 'name', 'cureTime' ]
  requiredFields.forEach(field => {
    if (!values[ field ]) { errors[ field ] = 'Required' }
  })
  if (isNaN(values.cureTime) || values.cureTime < 0) {
    errors.cureTime = 'Invalid Time'
  }
  return errors
}

const ResinForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name='name' component={TextField} hintText='Default Resin' floatingLabelText='Resin Name' fullWidth />
      </div>
      <div>
        <Field name='cureTime' component={TextField} hintText='4.2' floatingLabelText='Cure Time (in seconds)' fullWidth />
      </div>
      <div style={{textAlign: 'right'}}>
        <FlatButton label='Clear' disabled={pristine || submitting} onTouchTap={reset} />
        <FlatButton label='Submit' type='submit' disabled={pristine || submitting} primary />
      </div>
    </form>
  )
}
ResinForm.propTypes = {
  ...propTypes
}

export default reduxForm({
  form: 'ResinForm',  // a unique identifier for this form
  validate
})(ResinForm)
