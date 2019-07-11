import {
    CREATE_ORDER,
    CREATE_ORDER_SUCCESS,
    GETTING_ORDERS,
GETTING_ORDERS_SUCCESS,
GETTING_ORDERS_FAILURE
} from './types'
import OrderService from '../services/ShoppingServices'
import ShoppingServices from '../services/ShoppingServices';

export const  createOrder = (cartId, addressId, totalCost, tax) =>async dispatch =>{
 dispatch(addNewOrder())
        if(cartId != ''){
            OrderService.createOrder({cartId, addressId, totalCost, tax}).then(response =>{
                dispatch(addNewOrderSuccess(response))
            })
        }

}

function addNewOrder(){
    return {
        type: CREATE_ORDER,
      
    }
}


function addNewOrderSuccess(order){
    return {
        type: CREATE_ORDER_SUCCESS,
        order
    }
}


export const getAllOrders = () => async dispatch =>{
    dispatch(gettingOrders())
    ShoppingServices.getOrders().then(orders =>{
        dispatch(gettingOrdersSuccess(orders))
    }).catch(err =>{
        gettingOrdersFailure(err)
    })
}

const gettingOrders =() =>{
    return {
        type: GETTING_ORDERS
    }
}

const gettingOrdersSuccess =(orders) =>{
    return {
        type: GETTING_ORDERS_SUCCESS,
        orders
    }
}

const gettingOrdersFailure = (error) =>{
    return {
        type: GETTING_ORDERS_FAILURE,
        error
    }
}
