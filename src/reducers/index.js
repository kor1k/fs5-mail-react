import {combineReducers} from 'redux'
import {reducer as formReducer} from 'redux-form';
import mails from './mails'

const rootReducer = combineReducers ({
    mails: mails,
    form: formReducer
})
export default rootReducer;