import React from 'react'
import { Field, reduxForm, propTypes } from 'redux-form'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import MenuItem from 'material-ui/MenuItem'
import { TextField, SelectField } from 'redux-form-material-ui'

const validate = values => { return {} }

let pins = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 20, 21, 22, 23, 24, 25, 26, 27]
const pinOptions = pins.map((i) => <MenuItem value={i} primaryText={'GPIO ' + i}/>)

const PrinterSettings = props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit} className='container-fluid' style={{marginTop: '10px'}}>
      <div className='row'>
        <div className='col-xs-12 col-sm-6 col-md-4'>
          <Paper zDepth={1} style={{padding: '10px', margin: '3px'}}>
            <h2>Projector</h2>
            <Field name='dpi' component={TextField} hintText='96' floatingLabelText='DPI' fullWidth />
            <Field name='xResolution' component={TextField} hintText='1920' floatingLabelText='Resolution Width' style={{width: '48%', marginRight: '2%'}} />
            <Field name='yResolution' component={TextField} hintText='1080' floatingLabelText='Resolution Height' style={{width: '48%', marginLeft: '2%'}} />
            <Field name='cureTimeMultiplier' component={TextField} hintText='1' floatingLabelText='Cure Time Multiplier' fullWidth />
          </Paper>
        </div>

        <div className='col-xs-12 col-sm-6 col-md-4'>
          <Paper zDepth={1} style={{padding: '10px', margin: '3px'}}>
            <h2>Motion</h2>
            <Field name='speed' component={TextField} hintText='3.5' floatingLabelText='Motor Speed (mm/s)' fullWidth />
            <Field name='liftHeight' component={TextField} hintText='3' floatingLabelText='Lift Height (mm)' fullWidth />
            <Field name='liftWait' component={TextField} hintText='1.5' floatingLabelText='Lift Pause (seconds)' fullWidth />
            <Field name='burnInHeight' component={TextField} hintText='60' floatingLabelText='Burn-In Height (mm)' fullWidth />
            <Field name='burnInLayerThickness' component={TextField} hintText='60' floatingLabelText='Burn-In Layer Thickness (&micro;m)' fullWidth />
            <Field name='burnInSpeed' component={TextField} hintText='0.5' floatingLabelText='Burn-In Motor Speed (mm/s)' fullWidth />
          </Paper>
        </div>

        <div className='col-xs-12 col-sm-6 col-md-4'>
          <Paper zDepth={1} style={{padding: '10px', margin: '3px'}}>
            <h2>GPIO Z-Axis</h2>
            <Field name='pinStep' component={SelectField} floatingLabelText='Step Pin' fullWidth>{pinOptions}</Field>
            <Field name='pinDirection' component={SelectField} floatingLabelText='Direction Pin' fullWidth>{pinOptions}</Field>
            <Field name='pinEnable' component={SelectField} floatingLabelText='Enable Pin' fullWidth>{pinOptions}</Field>
            <Field name='pinEndstopMin' component={SelectField} floatingLabelText='Min-Endstop Pin' fullWidth>{pinOptions}</Field>
            <Field name='pinEndstopMin' component={SelectField} floatingLabelText='Max-Endstop Pin' fullWidth>{pinOptions}</Field>
            <Field name='pinEndstopHome' component={SelectField} floatingLabelText='Home-Endstop Pin' fullWidth>{pinOptions}</Field>

            <Field name='stepsPerRevolution' component={TextField} hintText='200' floatingLabelText='Steps / Revolution' fullWidth />
            <Field name='microsteps' component={TextField} hintText='16' floatingLabelText='Microsteps' fullWidth />
            <Field name='unitsPerRevolution' component={TextField} hintText='60' floatingLabelText='mm / Revolution' fullWidth />
          </Paper>
        </div>

        <div className='col-xs-12 col-sm-12 col-md-12'>
          <Paper zDepth={1} style={{padding: '10px', margin: '3px', textAlign: 'right'}}>
            <FlatButton label='Clear' disabled={pristine || submitting} onTouchTap={reset} />
            <FlatButton label='Submit' type='submit' disabled={pristine || submitting} primary />
          </Paper>
        </div>
      </div>
    </form>
  )
}
PrinterSettings.propTypes = {
  ...propTypes
}

export default reduxForm({
  form: 'PrinterSettingsForm',  // a unique identifier for this form
  validate
})(PrinterSettings)
