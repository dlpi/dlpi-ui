import { combineReducers } from 'redux'

import { reducer as form } from 'redux-form'
import helloworld from './helloworld'

const rootReducer = combineReducers({
  form,
  helloworld
})

export default rootReducer
