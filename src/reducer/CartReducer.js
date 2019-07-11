import {
    ADD_ITEM_TO_CART,
    REMOVE_ITEM_FROM_CART,
    INCREASE_PRODUCT_IN_CART,
    DECREASE_PRODUCT_IN_CART,
    EMPTY_CART,
    GET_PRODUCT_IN_CART_COUNT,
    ADD_PRODUCT_TO_SELECTION,
    REMOVE_PRODUCT_FROM_SELECTION,
    CREATE_CART_SUCCESS,
    CREATE_CART
} from '../actions/types'



const initialState = {
    totalPrice: 0,
    cart: [],
    length : 0,
    selection: [],
    cartId: ''
}

function addItemToCart(state, product) {
  
    let cart = state.cart;
    
    let idx = state.cart.findIndex(element => element._id == product._id);

    let totalPrice = state.totalPrice + (product.price * product.quantity);
    let length;
    if (state.cart.findIndex(element => element._id == product._id) != -1) {
    
        cart[idx].quantity += 1;
        length = state.length
    } else {
        
        cart.push(product);
       length = state.length +1;
    }

    return { ...state,
        cart,
        totalPrice,
        length
    }
}

function removeItemFromCart(state, product) {
    let cart = state.cart;
    let idx = state.cart.findIndex(element => element._id == product._id);
    let totalPrice = state.totalPrice - (state.cart[idx].price * state.cart[idx].quantity);

    let length = state.length - 1
    if (state.cart.findIndex(element => element._id == product._id) !== -1) {
        cart.splice(idx, 1);
        
    }
    
    return { ...state,
        cart,
        totalPrice,
        length
    }
}



function decreaseItemInCart(state, product) {
    let cart = state.cart;
    let length;
    let idx = state.cart.findIndex(element => element._id == product._id);
    let totalPrice = state.totalPrice;
    if (idx !== -1) {
        totalPrice -= (product.price * product.quantity);
        if (state.cart[idx].quantity > 1) {
            cart[idx].quantity -= 1;
        } else {
            if(cart.length > 0){

                length = (state.length -1);
            }
           return removeItemFromCart(state, product)
        }
    }

    return { ...state,
        cart,
        totalPrice,
        length,
    }
}

function addProductToSelection (state, _id){
    let selection = state.selection;
    selection.push(_id);
    return {
        ...state, 
        selection
    }
}

function removeProductFromSelection (state, _id){
    let selection = state.selection;
    let idx = selection.indexOf(_id);

    if(idx > -1){
        selection.splice(idx, 1);
    }
    
    return {
        ...state, 
        selection
    }
}


export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_ITEM_TO_CART:
       
            return addItemToCart(state, action.product)
        case REMOVE_ITEM_FROM_CART:
            return removeItemFromCart(state, action.product)
        case INCREASE_PRODUCT_IN_CART:
            return addItemToCart(state, action.product)
        case DECREASE_PRODUCT_IN_CART:
            return decreaseItemInCart(state, action.product)
        case GET_PRODUCT_IN_CART_COUNT:
        return decreaseItemInCart(state, action.product)

        case EMPTY_CART:
            return { ...state,
                cart: [],
                totalPrice: 0,
                length: 0
            }
        case ADD_PRODUCT_TO_SELECTION:
        return addProductToSelection(state, action.id)

        case REMOVE_PRODUCT_FROM_SELECTION:
        return removeProductFromSelection(state, action.id)

        case CREATE_CART_SUCCESS:
            return {
                ...state, cartId: action.data
            }
        default:
            return state;
    }
}