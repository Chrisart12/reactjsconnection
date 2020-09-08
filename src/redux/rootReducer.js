import { combineReducers } from 'redux'
import loginReducer  from './login/loginReducer';
import questionReducer from './question/questionReducer'

const rootReducer = combineReducers({
    user: loginReducer,
    questions: questionReducer,
})

export default rootReducer;