import {
    FETCHING_SAVED_ITEMS,
    FETCHING_SAVED_ITEM_SUCCESS,
    FETCHING_SAVED_ITEMS_FAILURE,
    ADDING_SAVED_ITEM_SUCCESS,
    REMOVE_SAVED_ITEM_SUCCESS
} from '../actions/types'

const initialState = {
    savedItems: [],
    error: false,
    isFetching: false
}
export default function (state = initialState, action) {

    switch (action.type) {
        case FETCHING_SAVED_ITEMS:
            return {
                ...state,
                isFetching: true,
            }


        case FETCHING_SAVED_ITEM_SUCCESS:

            return {
                ...state,
                savedItems: action.savedItems,
                isFetching: false
            }

        case ADDING_SAVED_ITEM_SUCCESS:


            return { ...state,
                savedItems: [...state.savedItems, action.savedItem],
                isFetching: false
            }

            case REMOVE_SAVED_ITEM_SUCCESS:
            let id = action.id;
            let savedItems = state.savedItems.filter(item => item.product._id !== id);
            return { ...state,
                savedItems
            }



        case FETCHING_SAVED_ITEMS_FAILURE:
            return {
                ...state
            }

        default:
            return state;
    }
}