import {   CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    FETCH_ORDER_SUCCESS,
    FETCH_ORDER,
    GETTING_ORDERS,
GETTING_ORDERS_SUCCESS,
GETTING_ORDERS_FAILURE } from '../actions/types';
const initialState = {
        order: [],
        isAdding: false,
        isFetching: false,
        orders: [],
        error: true,
        errorMessage : ''
}
export default function(state = initialState, action) {
    switch(action.type) {
        case CREATE_ORDER:
            return {
                ...state,
               isAdding: true
            }

            case CREATE_ORDER_SUCCESS:
            return {
                ...state,
               isAdding: false,
               isFetching: false,
               order: action.order,
               orders: state.orders.concat(action.order)
            }

            case FETCH_ORDER_SUCCESS:
            return {
                ...state,
               isAdding: false,
               isFetching: false,
               orders: action.orders
            }

            case FETCH_ORDER:
            return {
                ...state,
               isFetching: true
            }

        case GETTING_ORDERS:
        return {
            ...state,
           isFetching: true
        }

        case GETTING_ORDERS_SUCCESS:
        return {
            ...state,
            orders:action.orders,
            isFetching: false
        }

        case GETTING_ORDERS_FAILURE:
        return {
            ...state, 
            error: true,
            errorMessage: action.error
        }

        default:
            return state
    }
}