import { combineReducers } from 'redux'
import summaryReducer from './summary'
import accountReducer from './account'
import userInfoReducer from './userInfo'
import projectReducer from './project'

const reducers = combineReducers({
  summaryReducer,
  accountReducer,
  userInfoReducer,
  projectReducer
})

export default reducers
