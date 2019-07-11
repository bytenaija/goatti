import Auth from '../services/AuthService'


import {
  USER_SIGNUP_SUCCESS,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_SCREEN,
  USER_SIGNUP_FAILURE, LOG_IN,

    USER_LOGIN_FAILURE,
    LOG_OUT,
    SIGN_UP,
    VERIFYING_LOGIN_STATUS,
    SIGN_UP_FAILURE,
    SHOW_SIGN_IN_CONFIRMATION_MODAL,
    SHOW_SIGN_UP_CONFIRMATION_MODAL,
    CONFIRM_SIGNUP,
    CONFIRM_SIGNUP_SUCCESS,
    CONFIRM_SIGNUP_FAILURE,
    CONFIRM_LOGIN,
    CONFIRM_LOGIN_SUCCESS,
    CONFIRM_LOGIN_FAILURE,
    PASSWORD_RECOVERY_SUCCESS,
    PASSWORD_RECOVERY_FAILURE} from './types'
import AuthService from '../services/AuthService';


function signUp() {
    return {
      type: SIGN_UP
    }
  }

  function signUpSuccess(user) {
    return {
      type: USER_SIGNUP_SUCCESS,
      user
    }
  }

  function signUpFailure(err) {
    return {
      type: USER_SIGNUP_FAILURE,
      error: err
    }
  }

  function logIn() {
    return {
      type: LOG_IN
    }
  }



export const createUser = (firstname, lastname, country, state, username, password, email, phoneNumber) =>  async dispatch =>{

      dispatch(signUp())

      Auth.signUp({
        firstname,
        lastname,
        username,
        password,
        email,
        phoneNumber,
        country,
        state,

      })
      .then(user => {
        localStorage.setItem('GoattiUserToken', JSON.stringify(user));
        dispatch(signUpSuccess(user))


      })
      .catch(err => {

        dispatch(signUpFailure(err))

      });
    }

    export const logout =() => async dispatch => {
      await localStorage.removeItem('GoattiUserToken')
        dispatch({
          type: LOG_OUT
        })
      }

      function logInSuccess(user) {
        return {
          type: USER_LOGIN_SUCCESS,
          user: user
        }
      }

      function logInFailure(err) {
        return {
          type: USER_LOGIN_FAILURE,
          error: err
        }
      }

      export function  authenticate(username, password) {

        return (dispatch) => {
          dispatch(logIn())
          Auth.signIn(username, password)
            .then(async user => {

             await localStorage.setItem('GoattiUserToken', JSON.stringify(user));

              dispatch(logInSuccess(user))

            })
            .catch(err => {

              dispatch(logInFailure(err))
            });
        }
      }

      export function showSignInConfirmationModal() {
        return {
          type: SHOW_SIGN_IN_CONFIRMATION_MODAL
        }
      }

      export function showSignUpConfirmationModal() {
        return {
          type: SHOW_SIGN_UP_CONFIRMATION_MODAL
        }
      }

      export function confirmUserLogin(authCode) {
        return (dispatch, getState) => {
          dispatch(confirmLogIn())
          const { auth: { user }} = getState()

          Auth.confirmSignIn(user, authCode)
            .then(data => {

              dispatch(confirmLoginSuccess(data))
            })
            .catch(err => {

              dispatch(confirmSignUpFailure(err))
            })
        }
      }

      function confirmLogIn() {
        return {
          type: CONFIRM_LOGIN
        }
      }

      function confirmLoginSuccess(user) {
        return {
          type: CONFIRM_LOGIN_SUCCESS,
          user
        }
      }




      function confirmSignUp() {
        return {
          type: CONFIRM_SIGNUP
        }
      }

      function confirmSignUpSuccess() {
        return {
          type: CONFIRM_SIGNUP_SUCCESS
        }
      }

      function confirmSignUpFailure(error) {
        return {
          type: CONFIRM_SIGNUP_FAILURE,
          error
        }
      }


export const forgotPassword = (email) => async dispatch =>{
AuthService.forgotPassword(email).then(response =>{
  if(response == true){
    dispatch(passwordRecoverySuccess())
  }else{
    dispatch(passwordRecoveryFailure(response))
  }
})
}

function passwordRecoverySuccess(){
  return {
    type: PASSWORD_RECOVERY_SUCCESS
  }
}

function passwordRecoveryFailure(error){
  return {
    type: PASSWORD_RECOVERY_FAILURE,
    error
  }
}

export const updateUser = () => async dispatch =>{
  let goattiUserToken = await localStorage.getItem('GoattiUserToken');
  let user = JSON.parse(goattiUserToken);

  Auth.getUserByToken(user.token).then(async user =>{
   await localStorage.setItem('GoattiUserToken', JSON.stringify(user));
    dispatch({type: USER_LOGIN_SUCCESS, user})
  })
}