import {ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
    GET_PRODUCT_IN_CART_COUNT,
    ADD_PRODUCT_TO_SELECTION,
    REMOVE_PRODUCT_FROM_SELECTION,
    CREATE_CART,
    CREATE_CART_SUCCESS
} from './types'
import CartService from '../services/CartService'

export const  addItemToCart = (product, cartId, totalCost) =>async dispatch =>{
 dispatch(addProduct(product))
 console.log(cartId)
        if(cartId != '' && cartId !== undefined){
            CartService.increaseQuantity(product, cartId, totalCost).then(response =>{
                
            })
        }

}

export const createCart = (cart, totalCost = 0) => async dispatch =>{
    
    
    if(cart.length){
        dispatch({
            type: CREATE_CART
        })

        
        CartService.createCart(cart, totalCost).then(response =>{
            let data = response._id
            dispatch({
                type: CREATE_CART_SUCCESS,
                data
            })
        })
    }
   
}

export const  removeItemFromCart = (product, cartId) =>async dispatch =>{
    dispatch(removeProduct(product))
    if(cartId != '' && cartId !== undefined){
    CartService.removeProduct(product, cartId).then(response =>{
       
    })
}
}

export const  increaseProductQuantity = (product, cartId, totalCost) =>async dispatch =>{
    dispatch(increaseQuantity(product))
    if(cartId != ''){
        CartService.increaseQuantity(product, cartId, totalCost).then(response =>{
            
       
        })
    } 
}

export const  decreaseProductQuantity = (product, cartId, totalCost) =>async dispatch =>{
    dispatch(decreaseQuantity(product))
    if(cartId != ''){
    CartService.decreaseQuantity(product, cartId, totalCost).then(response =>{
     
    })
}
}

function addProduct(product){
    return {
        type: ADD_ITEM_TO_CART,
        product
    }
}

function removeProduct(product){
    return {
        type: REMOVE_ITEM_FROM_CART,
        product
    }
}

function increaseQuantity(product){
    return {
        type: INCREASE_PRODUCT_IN_CART,
        product
    }
}

function decreaseQuantity(product){
    return {
        type: DECREASE_PRODUCT_IN_CART,
        product
    }
}

export const addProductToSelection = (id) => async dispatch =>{
    dispatch({
        type: ADD_PRODUCT_TO_SELECTION,
        id
    })
}


export const removeProductFromSelection = (id) => async dispatch =>{
    dispatch({
        type: REMOVE_PRODUCT_FROM_SELECTION,
        id
    })
}
export const  getProductCount = (product) => async dispatch =>{
dispatch({
    type: GET_PRODUCT_IN_CART_COUNT,
    product
})
}
