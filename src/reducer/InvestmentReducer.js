import {FETCHING_INVESTMENT,  FETCHING_INVESTMENT_SUCCESS,
    FETCHING_INVESTMENT_FAILURE} from  '../actions/types'

    const initialState = {
        investments: [],
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){
    case FETCHING_INVESTMENT:
        return {
            ...state,
            isFetching: true,
            investments: []
        }
    
    
   case FETCHING_INVESTMENT_SUCCESS:
       return {
           ...state, 
           investments : action.data,
           isFetching: false
   }

   case FETCHING_INVESTMENT_FAILURE:
       return {
           ...state     
    }

    default:
    return state;
}
}