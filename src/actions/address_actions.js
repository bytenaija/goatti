import {
    CREATE_ADDRESS,
    CREATE_ADDRESS_SUCCESS,
    GET_ADDRESS_SUCCESS,
    GET_ADDRESS,
    SELECT_ADDRESS,

} from './types'
import AddressService from '../services/AddressService'

export const addNewAddress = (address) => async dispatch => {
    dispatch(addAddress())
    AddressService.addAddress(address).then(address => {
        dispatch(addAddressSuccess(address))
    })
}



export const getAddresses = (address) => async dispatch => {
    dispatch(getFullAddresses())
    AddressService.getAddresses(address).then(address => {
       
        dispatch(getAddressesSuccess(address))
        let selectedAddress = address.filter(address => address.default)
       
        dispatch(selectAddress(selectedAddress[0]))
    })
}



export const changeSelectedAddress = (address) => async dispatch => {
    dispatch(selectAddress(address))

}




function addAddress() {
    return {
        type: CREATE_ADDRESS,

    }
}

function addAddressSuccess(address) {
    return {
        type: CREATE_ADDRESS_SUCCESS,
        address
    }
}

function getFullAddresses() {
    return {
        type: GET_ADDRESS,

    }
}

function getAddressesSuccess(address) {
    return {
        type: GET_ADDRESS_SUCCESS,
        address
    }
}

function selectAddress(address) {
    return {
        type: SELECT_ADDRESS,
        address
    }
}