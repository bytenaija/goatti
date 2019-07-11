import {    LIKE_FEED,
    LIKE_FEED_SUCCESS,
    LIKE_FEED_FAILURE,
    DIS_LIKE_FEED,
    DIS_LIKE_FEED_SUCCESS,
    DIS_LIKE_FEED_FAILURE,
    FAVOURITE_FEED,
    FAVOURITE_FEED_SUCCESS,
    FAVOURITE_FEED_FAILURE,
    UN_FAVOURITE_FEED,
UN_FAVOURITE_FEED_SUCCESS,
UN_FAVOURITE_FEED_FAILURE,
GET_FEEDS,
GET_FEEDS_SUCCESS, FEEDS_UNLIKE,
FEEDS_UNDISLIKE} from  '../actions/types'

    const initialState = {
        feeds: [],
        error: false,
        isFetching: false
    }
export default  function(state =initialState, action){

switch(action.type){

    case GET_FEEDS:
        return {
            ...state,
            isFetching: true,
        }
    
    
   case GET_FEEDS_SUCCESS:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case FEEDS_UNLIKE:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case FEEDS_UNDISLIKE:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }
    case LIKE_FEED:
        return {
            ...state,
            isFetching: true,
        }
    
    
   case LIKE_FEED_SUCCESS:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case LIKE_FEED_FAILURE:
       return {
           ...state     
    }

    case DIS_LIKE_FEED:
        return {
            ...state,
            isFetching: true,
            feeds: []
        }
    
    
   case DIS_LIKE_FEED_SUCCESS:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case DIS_LIKE_FEED_FAILURE:
       return {
           ...state     
    }

    case FAVOURITE_FEED:
        return {
            ...state,
            isFetching: true,
            feeds: []
        }
    
    
   case FAVOURITE_FEED_SUCCESS:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case FAVOURITE_FEED_FAILURE:
       return {
           ...state     
    }

    case UN_FAVOURITE_FEED:
        return {
            ...state,
            isFetching: true,
            feeds: []
        }
    
    
   case UN_FAVOURITE_FEED_SUCCESS:
       return {
           ...state, 
           feeds:  action.feeds,
           isFetching: false
   }

   case UN_FAVOURITE_FEED_FAILURE:
       return {
           ...state     
    }

    default:
    return state;
}
}