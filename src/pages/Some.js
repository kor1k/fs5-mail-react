import React, { Component } from 'react';
import { WelcomeDialog } from '../components/WelcomeDialog'
import CustomTextInput from '../components/CustomTextInput'
import '../App.scss';

class Some extends Component {

    render() {
        console.log('Some ====', this.props)
        return (
            <>
                {this.props.match.params.id ? this.props.match.params.id : Some}
                <WelcomeDialog />
            </>
        );
    }
}

export default Some;
