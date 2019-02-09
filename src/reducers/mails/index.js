import { DEL_EMAIL } from '../../actions/mails'

const initialState = {
    mailList: {
        inbox : [
            {
                id: 1,
                from: 'bender@futurama.com',
                subject: 'Kill all humans',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 2,
                from: 'fray@futurama.com',
                subject: 'Shut up, and take my money!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            }
        ],
        send : [
            {
                id: 21,
                from: 'fray@futurama.com',
                subject: 'I hate you!!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 22,
                from: 'fray-lover@futurama.com',
                subject: 'I love you!!!!!!',
                text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias rerum architecto nisi et, quidem, odit a, velit vero id quae quam! Eligendi, in at sequi libero consequuntur architecto pariatur quo.'
            },
            {
                id: 23,
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
        case DEL_EMAIL:
            return {...state,  ...action.payload}
        default:
            return {...state}
    }
}
export default mails