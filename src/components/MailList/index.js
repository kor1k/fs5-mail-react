import React, { Component } from 'react'
import NewMailForm from '../NewMailForm'
import { mailList } from '../../dummy'
export default class MailList extends Component {
    render() {
        let mails = mailList.map( (mail) => {
            return (
                <li key={mail.id}>{mail.from} - {mail.subject}</li>
            )
        })
        return (
            <div>
                <ul>
                    {mails}
                </ul>
                {this.props.showModal ? <NewMailForm /> : null}
            </div>
        )
    }
}