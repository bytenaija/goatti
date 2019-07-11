import axios from 'axios'


const BASE_URL = 'https://api.goatti.ng/investments/v1';

export default {
  getInvestments: () => {
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

      axios.get(`${BASE_URL}`, config)
        .then(response => {

          if (response.data.success) {

            resolve(response.data.investments)
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