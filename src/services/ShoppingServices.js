import axios from 'axios'


const BASE_URL = 'http://goatti.ng'

export default {
    getProducts : () =>{
        return new Promise( (resolve, reject) =>{


        axios.get(`${BASE_URL}/products/v1`)
        .then(response =>{
            // // console.log (response)
            if(response.data.success){
                resolve(response.data.products)
            }else{
               reject(response.data.message)
            }
        })
        .catch(err =>{
            reject(err)
        })
    })
},

createOrder: (order) =>{
    return new Promise(async (resolve, reject) =>{

    let goattiUserToken = await localStorage.getItem('GoattiUserToken');
    // // console.log ('goattiUserToken', goattiUserToken)
    goattiUserToken = JSON.parse(goattiUserToken)
    // console.log ('goattiUserToken', goattiUserToken.token)
    let config = {
        headers: { 'Authorization': `Bearer ${goattiUserToken.token}`}
    }

    axios.post(`${BASE_URL}/orders/v1`, order, config)
    .then(response =>{

        if(response.data.success){
            resolve(response.data.order)
        }else{
           reject(response.data.message)
        }
    })
    .catch(err =>{
        reject(err)
    })
})
},

getOrders: (order) =>{
    return new Promise(async (resolve, reject) =>{

    let goattiUserToken = await localStorage.getItem('GoattiUserToken');
    // // console.log ('goattiUserToken', goattiUserToken)
    goattiUserToken = JSON.parse(goattiUserToken)
    // console.log ('goattiUserToken', goattiUserToken.token)
    let config = {
        headers: { 'Authorization': `Bearer ${goattiUserToken.token}`}
    }

    axios.get(`${BASE_URL}/orders/v1/user`, config)
    .then(response =>{

        if(response.data.success){
            resolve(response.data.orders)
        }else{
           reject(response.data.message)
        }
    })
    .catch(err =>{
        reject(err)
    })
})
}
}