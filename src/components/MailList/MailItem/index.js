import React, { Component } from 'react'
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {DEL_EMAIL} from "../../../actions/mails";

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
        return (
            <>
                <li onClick={()=>{this.props.openMail(mail.id)}}>
                    <NavLink to={`/mail/${mail.id}`} className={isRead}>
                        {mail.from} - <h6>{mail.subject}</h6>
                        {this.props.currentShowId === mail.id ? <p>{mail.text}</p> : null}
                    </NavLink>
                    <button onClick={()=>{ this.props.delEmail(mail.id, this.props.mailsFromStore)}}>Удалить</button>
                </li>
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delEmail: (delID, mailList) => {
            let newMailList = {...mailList }
            for(let key in newMailList){
                newMailList[key] = newMailList[key].filter( (item) => {
                    return item.id != delID ? item : null
                })
            }
            dispatch({ type: DEL_EMAIL, payload: {mailList: newMailList} })
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailItem);