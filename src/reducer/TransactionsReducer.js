import {FETCHING_TRANSACTION,  FETCHING_TRANSACTION_SUCCESS,
    FETCHING_TRANSACTION_FAILURE} from  '../actions/types'

    const initialState = {
        transactions: [],
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){
    case FETCHING_TRANSACTION:
        return {
            ...state,
            isFetching: true,
            transactions: []
        }
    
    
   case FETCHING_TRANSACTION_SUCCESS:
       return {
           ...state, 
           transactions : action.data,
           isFetching: false
   }

   case FETCHING_TRANSACTION_FAILURE:
       return {
           ...state     
    }

    default:
    return state;
}
}