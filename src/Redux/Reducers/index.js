import { combineReducers } from 'redux'
import authenticationReducer from './AuthenticationReducer';

const reducers = combineReducers({
	authenticationReducer,
})

export default reducers
