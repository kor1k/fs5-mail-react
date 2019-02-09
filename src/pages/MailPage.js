import React, { Component } from 'react';
import { mailList } from '../dummy';

export default class MailPage extends Component {
    state = {
        from : '',
        to : '',
        subject : '',
        text : '',
    };

    componentDidMount() {
        const mailToShow = mailList['inbox'].find((mail) => {
            return mail.id == this.props.match.params.id;
        });
        console.log(this);
        this.setState({...mailToShow});
    }

    render() {
        return (
            <>
                <h1>{this.state.subject}</h1>
                <h4>{this.state.from}</h4>
                <p>{this.state.text}</p>
            </>
        );
    };
}