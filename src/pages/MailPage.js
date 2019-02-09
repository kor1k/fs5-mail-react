import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { mailList } from '../dummy';
import {DEL_EMAIL} from "../actions/mails";

class MailPage extends Component {
    static defaultProps = {
        mail: {
            subject: 'No subject',
            from : 'nowho',
            text : 'no mails found'
        }
    };

    static propTypes = {
        mail : PropTypes.shape({
            subject: PropTypes.string.isRequired,
            from : PropTypes.string.isRequired,
            text : PropTypes.string.isRequired
        })
    };

    render() {
        console.log(this.props)
        return (
            <>
                <h1>{this.props.mail.subject}</h1>
                <h4>{this.props.mail.from}</h4>
                <p>{this.props.mail.text}</p>

            </>
        );
    };
}

const mapStateToProps = (state, props) => {
    let mails = {...state.mails.mailList };
    let resMail = [];

    for(let key in mails){
        resMail = mails[key].filter( (item) => {
            return item.id == props.match.params.id ? item : null;
        });
        if(resMail.length > 0){
            break;
        }
    }
    if(resMail.length < 1){
        return {
            gogi : 'gogi'
        }
    }
    return {
        mail : resMail[0],
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        delEmail: (delID, mailList) => {
            // let newMailList = {...mailList};
            // for(let key in newMailList) {
            //
            // }
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MailPage);