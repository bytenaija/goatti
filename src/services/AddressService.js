import axios from 'axios'


const BASE_URL = 'https://api.goatti.ng/addresses/v1';

export default {
  getAddresses: () => {
    return new Promise(async (resolve, reject) => {

      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      axios.get(`${BASE_URL}/`, config)
        .then(response => {

          if (response.data.success) {

            resolve(response.data.addresses)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  addAddress: (address) => {
    return new Promise(async (resolve, reject) => {

      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      axios.post(`${BASE_URL}/`, address, config)
        .then(response => {

          if (response.data.success) {
            console.log("Adddress s s s s aaadd djdjdjd", response.data.address)
            resolve(response.data.address)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },


}