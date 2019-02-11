import {
    DEL_MAIL_SUCCESS, DEL_MAIL_REQUEST, READ_EMAIL, START_UPDATE_MAIL_LIST, SUCCESS_UPDATE_MAIL_LIST,
    START_MARK_AS_READ, SUCCESS_MARK_AS_READ
} from '../../actions/mails'
import {mailList} from "../../dummy";

const initialState = {
    isFetching: false,
    isUpdating: false,
    mailList: {
        inbox : [
            {
                id: 1,
                isRead: false,
                from: 'bender@futurama.com',
                subject: 'Kill all humans',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 2,
                isRead: false,
                from: 'fray@futurama.com',
                subject: 'Shut up, and take my money!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            }
        ],
        send : [
            {
                id: 21,
                isRead: false,
                from: 'fray@futurama.com',
                subject: 'I hate you!!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 22,
                isRead: false,
                from: 'fray-lover@futurama.com',
                subject: 'I love you!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 23,
                isRead: false,
                from: 'fray-not-fray@futurama.com',
                subject: 'Here is your money!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            }
        ]
    },
}

function mails (state = initialState, action) {
    switch (action.type){
        case 'SENT_EMAIL': //что делаем при отправке письма
            let updatedSentMailList = [...this.state.mailList.send];
            updatedSentMailList.push(action.payload)
            return {...state, mailList: {...this.state.mailList, send: [...updatedSentMailList]}}
        case DEL_MAIL_REQUEST:
            return { ...state, isFetching: true }
        case DEL_MAIL_SUCCESS:
            return {...state,  ...action.payload, isFetching: false};
        case READ_EMAIL:
            let newMails = state.mailList.inbox.map((mail) => {
                if(mail.id === action.payload.id) {
                    mail.isRead = true;
                }
                return mail;
            });
            return {...state, mailList: {...this.state.mailList, inbox: newMails}};
        case START_UPDATE_MAIL_LIST:
            return {...state, isUpdating: true};
        case SUCCESS_UPDATE_MAIL_LIST:
            return {...state, isUpdating: false};
        case START_MARK_AS_READ:
            return {...state, isUpdating: true};
        case SUCCESS_MARK_AS_READ:
            console.log('======',{...state, isUpdating: false, mailList: {inbox: [...action.payload.inbox]}})
            return {...state, isUpdating: false, mailList: {inbox: [...action.payload.inbox]}};
        default:
            return {...state}
    }
}
export default mails