import React, { Component } from 'react'

export default class MailList extends Component {
    state = {
        showText: false,
    };
    toggleText = () => {
        this.setState({
            showText: !this.state.showText,
        });
    };
    render() {
        const {mail} = this.props;
        return (
            <>
                <li onClick={()=>{this.props.openMail(mail.id)}}>
                    {mail.from} - <h6>{mail.subject}</h6>
                    {this.props.currentShowId === mail.id ? <p>{mail.text}</p> : null}
                </li>
            </>
        )
    }
}