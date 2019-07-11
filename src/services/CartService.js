import axios from 'axios'

const BASE_URL = 'https://api.goatti.ng/orders/v1'


export default {
  createCart: (carts, totalCost) => {

    return new Promise(async (resolve, reject) => {
      let cartitems = []
      carts.forEach(cart => {
        cartitems.push({
          productId: cart._id,
          quantity: cart.quantity,
        })
      })
      let cartBody = {}
      cartBody.cartitems = cartitems;
      cartBody.totalCost = totalCost;


      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      axios.post(`${BASE_URL}/cart`, cartBody, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.cart)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  increaseQuantity: (product, cartId, totalCost) => {

    return new Promise(async (resolve, reject) => {
      let cartitems = []

      cartitems.push({
        productId: product._id,
        quantity: product.quantity,
      })

      let cartBody = {}
      cartBody.cartitems = cartitems;
      cartBody.totalCost = totalCost;
      console.log("Cartsttttttttttttttttttttttttttttttttt", cartBody)


      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      axios.put(`${BASE_URL}/cart/${cartId}`, cartBody, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.cart)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  decreaseQuantity: (product, cartId, totalCost) => {

    return new Promise(async (resolve, reject) => {
      let cartitems = []

      cartitems.push({
        productId: product._id,
        quantity: -product.quantity,
      })

      let cartBody = {}
      cartBody.cartitems = cartitems;
      cartBody.totalCost = totalCost;



      let goattiUserToken = await localStorage.getItem('GoattiUserToken');
      // // console.log ('goattiUserToken', goattiUserToken)
      goattiUserToken = JSON.parse(goattiUserToken)
      // console.log ('goattiUserToken', goattiUserToken.token)
      let config = {
        headers: {
          'Authorization': `Bearer ${goattiUserToken.token}`
        }
      }

      axios.put(`${BASE_URL}/cart/${cartId}`, cartBody, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.cart)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },


  removeProduct: (product, cartId) => {

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

      axios.delete(`${BASE_URL}/cart/${cartId}/${product._id}`, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            console.log(response.data.message);
            resolve(response.data.message)
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