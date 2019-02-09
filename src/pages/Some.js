import React, { Component } from 'react';
import { WelcomeDialog } from '../components/WelcomeDialog'
import CustomTextInput from '../components/CustomTextInput'
import '../App.scss';

class Some extends Component {

    render() {
        console.log('Some ====', this.props)
        return (
            <>
                <WelcomeDialog />
            </>
        );
    }
}

export default Some;
