import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form';
import { requiredInput, correctInput, matchInput } from '../../validation';
import myInput from './myInput';


class FeedbackForm extends Component {
    render() {
        console.log(this.props)
        const {handleSubmit} = this.props;
        return (
        <div>
            <form onSubmit={handleSubmit}>
                <Field
                    name="email" 
                    component={myInput}
                    type="text" 
                    placeholder="Your e-mail..." 
                    validate={[requiredInput, correctInput]}
                />
                <Field
                    name="email2" 
                    component={myInput}
                    type="text" 
                    placeholder="Your e-mail..." 
                    validate={[requiredInput, correctInput, matchInput]}
                />
                <Field 
                    name="msg" 
                    component="textarea"
                    type="textarea" 
                    placeholder="Message" 
                />
                <button type="submit" label="submit">Send</button>
            </form>

        </div>
        )
    }
}
export default reduxForm({ 
    form: 'feedback', 
})(FeedbackForm)
