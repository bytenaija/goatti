import axios from 'axios'


const BASE_URL = 'http://goatti.ng'

export default {
    getSavedItems : () =>{
        return new Promise( async (resolve, reject) =>{
            let goattiUserToken = await localStorage.getItem('GoattiUserToken');
            // // console.log ('goattiUserToken', goattiUserToken)
            goattiUserToken = JSON.parse(goattiUserToken)
            // console.log ('goattiUserToken', goattiUserToken.token)
            let config = {
                headers: { 'Authorization': `Bearer ${goattiUserToken.token}`}
            }

        axios.get(`${BASE_URL}/saveditems/v1`, config)
        .then(response =>{
            console.log ("saved item response", response.data)
            if(response.data.success){
                resolve(response.data.savedItems)
            }else{
               reject(response.data.message)
            }
        })
        .catch(err =>{
            reject(err)
        })
    })
},

addSavedItem: (id) =>{
    return new Promise(async (resolve, reject) =>{

    let goattiUserToken = await localStorage.getItem('GoattiUserToken');
    // // console.log ('goattiUserToken', goattiUserToken)
    goattiUserToken = JSON.parse(goattiUserToken)
    // console.log ('goattiUserToken', goattiUserToken.token)
    let config = {
        headers: { 'Authorization': `Bearer ${goattiUserToken.token}`}
    }

    axios.post(`${BASE_URL}/saveditems/v1`, {product: id}, config)
    .then(response =>{
        console.log ("saved ddfdf response", response.data)
        if(response.data.success){
            resolve(response.data.savedItem)
        }else{
           reject(response.data.message)
        }
    })
    .catch(err =>{
        reject(err)
    })
})
},

removeSavedItem: (id) =>{
    return new Promise(async (resolve, reject) =>{

    let goattiUserToken = await localStorage.getItem('GoattiUserToken');
    // // console.log ('goattiUserToken', goattiUserToken)
    goattiUserToken = JSON.parse(goattiUserToken)
    // console.log ('goattiUserToken', goattiUserToken.token)
    let config = {
        headers: { 'Authorization': `Bearer ${goattiUserToken.token}`}
    }

    axios.delete(`${BASE_URL}/saveditems/v1/${id}`, config)
    .then(response =>{

        if(response.data.success){
            console.log(response.data.message);resolve(response.data.message)
        }else{
           reject(response.data.message)
        }
    })
    .catch(err =>{
        reject(err)
    })
})
},
}