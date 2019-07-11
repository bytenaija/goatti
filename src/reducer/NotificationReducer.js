import {FETCHING_NOTIFICATION, SET_NOTIFICATIONS, GET_NOTIFICATIONS, FETCHING_NOTIFICATION_SUCCESS,
    FETCHING_NOTIFICATION_FAILURE} from  '../actions/types'

    const initialState = {
        notifications: [],
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){
    case FETCHING_NOTIFICATION:
        return {
            ...state,
            isFetching: true,
        }


   case FETCHING_NOTIFICATION_SUCCESS:
       return {
           ...state,
           notifications : [...state.notifications, action.data],
           isFetching: false
   }

   case FETCHING_NOTIFICATION_FAILURE:
       return {
           ...state
    }

    default:
    return state;
}
}
