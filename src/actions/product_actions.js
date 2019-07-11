import { FETCHING_PRODUCTS_SUCCESS } from './types';

import ShoppingServices from '../services/ShoppingServices'

export const fetchProducts = () => async dispatch => {
    const  products = await ShoppingServices.getProducts();
   
     dispatch({
        type: FETCHING_PRODUCTS_SUCCESS,
        products
    })
}
