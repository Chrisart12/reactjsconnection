import { combineReducers } from 'redux'
import loginReducer  from './login/loginReducer';

const rootReducer = combineReducers({
    user: loginReducer
})

export default rootReducer;