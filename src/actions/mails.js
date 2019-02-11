export const DEL_MAIL_SUCCESS= 'DEL_MAIL_SUCCESS';
export const READ_EMAIL= 'READ_EMAIL';
export const DEL_MAIL_REQUEST = 'DEL_MAIL_REQUEST';
export const START_UPDATE_MAIL_LIST = 'START_UPDATE_MAIL_LIST';
export const SUCCESS_UPDATE_MAIL_LIST = 'SUCCESS_UPDATE_MAIL_LIST';
export const START_MARK_AS_READ = 'START_MARK_AS_READ';
export const SUCCESS_MARK_AS_READ = 'SUCCES_MARK_AS_READ';

export function markAsRead(mailID) {
    return (dispatch, state) => {
        dispatch({
            type: START_MARK_AS_READ,
        });
        setTimeout(()=>{
            let store = state();
            const updatedMailList = store.mails.mailList.inbox.map((mail) => {
                if(mail.id == mailID) {
                    mail.isRead = true;
                }
                return mail
            });
            dispatch({type: SUCCESS_MARK_AS_READ, payload:{inbox:updatedMailList}});
        }, 2000)
    }
}

export function delEmail(delID, mailList) {
    return (dispatch, state) => {
        console.log('State from AC', state());
        dispatch({
            type: DEL_MAIL_REQUEST,
        });
        setTimeout(() => {
            let newMailList = {...mailList };
            for(let key in newMailList){
                newMailList[key] = newMailList[key].filter( (item) => {
                    return item.id != delID ? item : null
                })
            }
            dispatch({ type: DEL_MAIL_SUCCESS, payload: {mailList: newMailList} })
        }, 10000)
    }
}

export function updateEmail(){
    return (dispatch) =>{
        console.log('updateEmail start');
        dispatch({
            type: START_UPDATE_MAIL_LIST,
        });
        setTimeout(() => {
            dispatch({ type: SUCCESS_UPDATE_MAIL_LIST})
        }, 3000)
    }
}