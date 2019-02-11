import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {delEmail} from "../../../actions/mails";

class MailItem extends Component {
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
        let isRead = mail.isRead ? 'read' : 'unread';
        const mailItem = <li onClick={()=>{this.props.openMail(mail.id)}}>
            <NavLink to={`/mail/${mail.id}`} className={isRead}>
                {mail.from} - <h6>{mail.subject}</h6>
                {this.props.currentShowId === mail.id ? <p>{mail.text}</p> : null}
            </NavLink>
            <button onClick={()=>{ this.props.delEmail(mail.id, this.props.mailsFromStore)}}>Удалить</button>
        </li>

        return (
            <>
                {this.props.isFetching ? <li>Идет удаление...</li> : mailItem}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // из стора мы берем переменную mailList
        // и заимпортируем в наш компонент под именем
        // mailList в пропсы
        mailsFromStore: state.mails.mailList,
        isFetching: state.mails.isFetching
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delEmail: (delID, mailList) => {
            dispatch( delEmail(delID, mailList) )
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailItem);