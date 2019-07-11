import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_SUCCESS,
    VERIFYING_LOGIN_STATUS,
    LOG_IN,
    USER_SIGNUP_FAILURE,
    USER_SIGNUP_SUCCESS,
    SIGN_UP,
    LOG_OUT
} from '../actions/types'

    const initialState = {
        isAuthenticating: false,
        user: {token: null},

        signUpError: false,
        signInError: false,
        signupSuccess: false,
        isSignUp: false,

        showSignUpConfirmationModal: false,
        showSignInConfirmationModal: false,

        confirmSignUpError: false,
        confirmLoginError: false,

        signInErrorMessage: '',
        signUpErrorMessage: '',
        verifyingLoginStatus: false,
        confirmLoginErrorMessage: '',
        confirmSignUpErrorMessage: ''
      }

export default  function(state =initialState, action){

switch(action.type){
    case USER_LOGIN_SUCCESS:
    return {...state, user: action.user, verifyingLoginStatus: false, isAuthenticating: false};

    case LOG_IN:
    return {...state, isAuthenticating: true, verifyingLoginStatus: false,}

    case USER_LOGIN_FAILURE:
    return {...state, user: {token: null},
    verifyingLoginStatus: false,
    isAuthenticating: false,
    signInError: true,
    signInErrorMessage: action.error
    }

     case USER_SIGNUP_FAILURE:
    return {...state, user: {token: null},
    isAuthenticating: false,
    signUpError: true,
    signUpErrorMessage: action.error
    }

    case USER_SIGNUP_SUCCESS:
    return {...state, user: action.user,  signupSuccess: true};

    case SIGN_UP:
    return {...state, signupSuccess: false, isSignUp: true};


    case LOG_OUT:
    return {...state, user: {token: null} }

    default:
    return state;
}
}