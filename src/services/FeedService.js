import axios from 'axios'

const BASE_URL = 'https://api.goatti.ng/feeds/v1'


export default {
  getFeeds: () => {
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


      axios.get(`${BASE_URL}/`)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },

  likeFeed: (id) => {
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

      let data = {
        type: 'like'
      }

      axios.patch(`${BASE_URL}/${id}/?type=like`, data, config)
        .then(response => {
          console.log("Ghdhdhdhdhdhd", response.data)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  dislikeFeed: (id) => {
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

      let data = {
        type: 'dislike'
      }

      axios.patch(`${BASE_URL}/${id}/?type=dislike`, data, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  favouriteFeed: (id) => {
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

      let data = {
        type: 'favourite'
      }

      axios.patch(`${BASE_URL}/${id}/?type=favourite`, data, config)
        .then(response => {
          // console.log (response)
          console.log("Ghdhdhdhdhdhd", response.data)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },
  unFavouriteFeed: (id) => {
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

      let data = {
        type: 'unfavourite'
      }

      axios.patch(`${BASE_URL}/${id}/?type=unfavourite`, data, config)
        .then(response => {
          console.log("unfavourite", response.data)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },


  unlike: (id) => {
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

      let data = {
        type: 'unlike'
      }

      axios.patch(`${BASE_URL}/${id}/?type=unlike`, data, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.feeds)
          } else {
            reject(response.data.message)
          }
        })
        .catch(err => {
          reject(err)
        })
    })
  },


  undislike: (id) => {
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

      let data = {
        type: 'undislike'
      }

      axios.patch(`${BASE_URL}/${id}/?type=undislike`, data, config)
        .then(response => {
          // console.log (response)
          if (response.data.success) {
            resolve(response.data.feeds)
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