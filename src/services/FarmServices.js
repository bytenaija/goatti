import axios from 'axios'

const BASE_URL = 'https://api.goatti.ng/farms/v1'


export default {
  getAllFarms: () => {
    return new Promise((resolve, reject) => {


      axios.get(`${BASE_URL}/getallfarms`)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.farms)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  createFarm: (numberOfGoats, profit, amountInvested, id) => {

    return new Promise(async (resolve, reject) => {
      let bodyParameters = {
        numberOfGoats,
        profitPercent: profit,
        amountInvested,
      }


      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      if (id) {
        axios.patch(`${BASE_URL}/${id}`, bodyParameters, config)
          .then(response => {
            // console.log (response)
            if (response.data.success) {
              resolve(response.data.farm)
            } else {
              reject(response.data.message)
            }
          })
          .catch(err => {
            reject(err)
          })
      } else {
        axios.post(`${BASE_URL}/`, bodyParameters, config)
          .then(response => {
            // console.log (response)
            if (response.data.success) {
              resolve(response.data.farm)
            } else {
              reject(response.data.message)
            }
          })
          .catch(err => {
            reject(err)
          })
      }
    })
  },

  widthDrawROI: (paymentDetails) => {

    return new Promise(async (resolve, reject) => {


      let goattiUserToken = await localStorage.getItem('GoattiUserToken');

      goattiUserToken = JSON.parse(goattiUserToken)

      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }



      axios.post(`${BASE_URL}/withdraw`, paymentDetails, config)
        .then(response => {
          //    console.log(response)
          if (response.data.success) {
            resolve(response.data.success)
          } else {
            reject(response.data.success)
          }
        })
        .catch(err => {
          console.log({
            ...err
          })
          // reject(err)
          reject(false)
        })

    })
  }



}