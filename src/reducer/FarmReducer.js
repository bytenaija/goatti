import {CREATE_FARM,  CREATE_FARM_SUCCESS,
    CREATE_FARM_FAILURE} from  '../actions/types'

    const initialState = {
        farm: {},
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){
    case CREATE_FARM:
        return {
            ...state,
            isFetching: true,
            farm: {}
        }
    
    
   case CREATE_FARM_SUCCESS:
       return {
           ...state, 
           farm : action.data,
           isFetching: false
   }

   case CREATE_FARM_FAILURE:
       return {
           ...state     
    }

    default:
    return state;
}
}