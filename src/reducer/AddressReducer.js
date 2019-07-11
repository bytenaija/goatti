import {
    CREATE_ADDRESS,
    CREATE_ADDRESS_SUCCESS,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS,
    SELECT_ADDRESS,
} from '../actions/types'

const initialState = {
    addresses: [],
    error: false,
    isFetching: false,
    selectedAddress: {}
}
export default function (state = initialState, action) {

    switch (action.type) {
        case CREATE_ADDRESS:
            return {
                ...state,
                isFetching: true,
            }


        case CREATE_ADDRESS_SUCCESS:
            return {
                ...state,
                addresses: [...state.addresses, action.address],
                isFetching: false
            }

        case GET_ADDRESS:
            return {
                ...state,
                isFetching: true,
            }

        case GET_ADDRESS_SUCCESS:
            return {
                ...state,
                addresses: action.address,
                isFetching: false
            }

            case SELECT_ADDRESS:
            return {
                ...state,
               selectedAddress: action.address,
               isFetching: false
            }

        default:
            return state;
    }
}