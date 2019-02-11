export const DEL_MAIL_SUCCESS= 'DEL_MAIL_SUCCESS';
export const READ_EMAIL= 'READ_EMAIL';
export const DEL_MAIL_REQUEST = 'DEL_MAIL_REQUEST';

export function delEmail(delID, mailList) {
    return (dispatch) => {
        dispatch({
            type: DEL_MAIL_REQUEST,
        })
        setTimeout(() => {
            let newMailList = {...mailList }
            for(let key in newMailList){
                newMailList[key] = newMailList[key].filter( (item) => {
                    return item.id != delID ? item : null
                })
            }
            dispatch({ type: DEL_MAIL_SUCCESS, payload: {mailList: newMailList} })
        }, 10000)
    }
}