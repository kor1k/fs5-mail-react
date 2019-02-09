import {combineReducers} from 'redux'
import mails from './mails'

const rootReducer = combineReducers ({
    mails: mails
})
export default rootReducer;