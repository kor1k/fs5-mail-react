import React, { Component } from 'react'
import {connect} from 'react-redux';
import { DEL_EMAIL } from '../../actions/mails'
import NewMailForm from '../NewMailForm'
import MailItem from './MailItem'

class MailList extends Component {
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
        let mails = this.props.mailsFromStore[activeFolder].map( (mail) => {
            return (
                <div>
                    <MailItem key={mail.id} mail={mail} currentShowId={this.state.openId} openMail={this.openMail}/>
                </div>
            )
        });
        return (
            <div className="col-8">
                <ul>
                    {mails}
                </ul>
                {this.props.showModal ? <NewMailForm /> : null}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        // из стора мы берем переменную mailList
        // и заимпортируем в наш компонент под именем
        // mailList в пропсы
        mailsFromStore: state.mails.mailList,
    }
}

export default connect(mapStateToProps)(MailList)