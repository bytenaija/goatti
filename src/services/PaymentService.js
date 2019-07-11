import axios from 'axios'

const BASE_URL = 'https://api.goatti.ng/orders/v1/payment'


export default {
  makePayment: async (paymentDetails) => {


    let goattiUserToken = await localStorage.getItem('GoattiUserToken');
    // // //console.log ('goattiUserToken', goattiUserToken)
    goattiUserToken = JSON.parse(goattiUserToken)
    // //console.log ('goattiUserToken', goattiUserToken.token)
    let config = {
      headers: {
        'Authorization': `Bearer ${goattiUserToken.token}`
      }
    }

    //  axios.interceptors
    return new Promise((resolve, reject) => {
      axios.post(`${BASE_URL}/`, paymentDetails, config)
        .then(response => {
          //console.log ("pAYMENT RESPONSE", response)
          if (response.data.success) {
            //console.log("rEPSONSNSNSNSN", response.data.message);
            resolve(response.data.message)
          }
        }).catch(err => {

          let e = {
            ...err
          }
          //console.log("Erorororororororor", e);
          // //console.log("Erorororororororor", e.response.data);
          reject(e)

        })
    })
  },


   webPayForFarm: async (paymentDetails) => {


    let goattiUserToken = await localStorage.getItem('GoattiUserToken');

    goattiUserToken = JSON.parse(goattiUserToken)

    let config = {
      headers: {
        'Authorization': `Bearer ${goattiUserToken.token}`
      }
    }

    //  axios.interceptors
    return new Promise((resolve, reject) => {
      axios.post(`${BASE_URL}/webpay`, paymentDetails, config)
        .then(response => {
          //console.log ("pAYMENT RESPONSE", response)
          if (response.data.success) {
            //console.log("rEPSONSNSNSNSN", response.data.message);
            resolve(response.data.message)
          }
        }).catch(err => {

          let e = {
            ...err
          }

          reject(e.response.data.message)

        })
    })
  },

  sendOTP: (paymentDetails) => {
    return new Promise(async (resolve, reject) => {
      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // //console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // //console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      //  axios.interceptors

      //console.log("submit otp", `${BASE_URL}/otp`)
      axios.post(`${BASE_URL}/otp`, paymentDetails, config)

        .then(response => {
          //console.log ("RESPONSE AFTER otp", response)
          if (response.data.success) {
            //console.log(response.data.message);
            resolve(response.data.message)
          } else {

            reject(response.data.message)
          }
        }).catch(err => {

          let e = {
            ...err
          }

          //console.log("Erorororororororor", e.response.data);
          reject(e.response.data.errorMessage)

        })
    })
  }

}