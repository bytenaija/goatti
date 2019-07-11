import axios from 'axios'

const BASE_URL = 'https://api.goatti.ng/auth/v1'

export default {
  signUp: (userObject) => {
    return new Promise((resolve, reject) => {


      axios.post(`${BASE_URL}/signup`, userObject)
        .then(response => {

          if (response.data.success) {

            let {
              user,
              token
            } = response.data;
            user.token = token;
            resolve(user)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
         if (err.response) {
           console.log(err.response.data.message)
           reject(err.response.data.message)
         }
         reject(err)
        })
    })
  },

  signIn: (username, password) => {
    return new Promise((resolve, reject) => {

      axios.post(`${BASE_URL}/login`, {
          username,
          password
        })
        .then(response => {

          if (response.data.success) {
            let {
              user,
              token
            } = response.data;
            user.token = token;
            resolve(user)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          if(err.response){
            console.log(err.response.data.message)
            reject(err.response.data.message)
          }
          reject(err)
        })
    })
  },

  forgotPassword: (email) => {
    return new Promise((resolve, reject) => {
      axios.post(`${BASE_URL}/forgotpassword`, {
          email
        })
        .then(response => {
          if (response.data.success) {
            resolve(true)
          } else {
            resolve(response.data.messag)
          }
        })
    })
  },

  getUserByToken: (token) => {

    return new Promise((resolve, reject) => {
      axios.post(`${BASE_URL}/token`, {
          token
        })
        .then(response => {
          if (response.data.success) {
            let {
              user,
              token
            } = response.data;

            user.token = token;
            resolve(user)
          } else {
            console.log(response.data.message);
            resolve(response.data.message)
          }
        })
    })
  },
}