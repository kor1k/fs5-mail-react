import React, { Component } from 'react'
import NewMailForm from '../NewMailForm'
import MailItem from './MailItem'
import { mailList } from '../../dummy'

export default class MailList extends Component {
    state = {
        openId : '',
    };
    openMail = (id) => {
         if (this.state.openId !== id) {
             this.setState({
                 openId: id,
             });
         } else {
             this.setState({
                 openId: '',
             });
         }
    };
    render() {
        const {activeFolder} = this.props;
        let mails = mailList[activeFolder].map( (mail) => {
            return (
                <MailItem key={mail.id} mail={mail} currentShowId={this.state.openId} openMail={this.openMail}/>
            )
        });
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