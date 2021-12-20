import { combineReducers } from 'redux'
import summaryReducer from './summary'
import accountReducer from './account'

const reducers = combineReducers({
  summaryReducer,
  accountReducer
})

export default reducers
