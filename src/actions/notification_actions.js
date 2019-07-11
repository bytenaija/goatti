import {FETCHING_NOTIFICATION, SET_NOTIFICATIONS, GET_NOTIFICATIONS, FETCHING_NOTIFICATION_SUCCESS,
    FETCHING_NOTIFICATION_FAILURE, RECIEVED_NOTIFICATION} from  './types'

export const getAllNotifications = () => async dispatch => {
    dispatch({type: GET_NOTIFICATIONS})
}

export const setNotification = (notification) => async dispatch =>{
dispatch(notificationRecieved())
dispatch(getNotificationsSuccess(notification))
}

function notificationRecieved(){
    return{
        type: RECIEVED_NOTIFICATION
    }
}

function getNotificationsSuccess(data){
    return{
        type: FETCHING_NOTIFICATION_SUCCESS,
        data
    }
}

function getNotificationsFailure(){
    return{
        type: FETCHING_NOTIFICATION_FAILURE
    }
}
