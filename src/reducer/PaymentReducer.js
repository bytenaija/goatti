import { ADD_CARD, REMOVE_CARD, PAYMENT_FAILED, PAYMENT_SUCCESSFUL, SEND_OTP, SENDING_OTP } from '../actions/types';
const initialState = {
        card: {
    },
    payment: {},
    error: false,
    errorMessage: '',
    send_otp: false,
    reference: '',
    displayText: '',
    chargeReference: ''

}
export default function(state = initialState, action) {
    switch(action.type) {
        case ADD_CARD:
            return {
                ...state,
                card: action.card
            }

        case REMOVE_CARD:
        return {...state, card: {}}

        case PAYMENT_FAILED:
            return {
                ...state,
               error: true,
               errorMessage: action.error
            }

        case PAYMENT_SUCCESSFUL:
        return {
            ...state,
            card: {
            },
            payment: {},
            error: false,
            errorMessage: '',
            send_otp: false,
            reference: '',
            displayText: '',
            chargeReference: ''
        }

        case SEND_OTP:
        return {
            ...state,
           error: false,
           errorMessage: '',
           send_otp: true,
           reference: action.reference,
           displayText: action.displayText,
           chargeReference: action.chargeReference
        }

        case SENDING_OTP:
        return {
            ...state,
           error: false,
           errorMessage: '',
           send_otp: false,
           reference: '',
           displayText: '',
           chargeReference: ''
        }

        default:
            return state
    }
}