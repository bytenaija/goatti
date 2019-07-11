import axios from 'axios'


const BASE_URL = 'https://api.goatti.ng/transactions/v1';

export default {
    getTransactions: () => {
        return new Promise(async (resolve, reject) => {

            let goattiUserToken = await localStorage.getItem('GoattiUserToken');
            // // console.log ('goattiUserToken', goattiUserToken)
            goattiUserToken = JSON.parse(goattiUserToken)
            let token = goattiUserToken.token;

            let config = {
                headers: { 'Authorization': `Bearer ${token}` }
            }
            // console.log ('goattiUserToken', config.headers)
            axios.get(`${BASE_URL}`, config)
                .then(response => {

                    if (response.data.success) {

                        resolve(response.data.transactions)
                    } else {
                        console.log(response.data.message)
                        reject(response.data.message)
                    }
                })
                .catch(err => {
                    console.log("Errrr", err)

                    reject(err)
                })
        })
    },

}