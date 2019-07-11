import {FETCHING_PRODUCTS,  FETCHING_PRODUCTS_SUCCESS,
    FETCHING_PRODUCTS_FAILURE} from  '../actions/types'

    const initialState = {
        products: [],
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){
    case FETCHING_PRODUCTS:
        return {
            ...state,
            isFetching: true,
        }


   case FETCHING_PRODUCTS_SUCCESS:
   
       return {
           ...state,
           products : action.products,
           isFetching: false
   }

   case FETCHING_PRODUCTS_FAILURE:
       return {
           ...state
    }

    default:
    return state;
}
}
