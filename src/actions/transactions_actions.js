import {
    FETCHING_TRANSACTION,
    FETCHING_TRANSACTION_SUCCESS,
    FETCHING_TRANSACTION_FAILURE
} from './types'


import TransactionService from '../services/TransactionService'

export const setTransactions = () => async dispatch => {
    dispatch(getTransactions())
    TransactionService.getTransactions().then(transactions =>{

        dispatch(getTransactionsSuccess(transactions))
    }).catch(err =>{

        getTransactionsFailure(err)
    })

}

function getTransactions() {
    return {
        type: FETCHING_TRANSACTION
    }
}

function getTransactionsSuccess(data) {
    return {
        type: FETCHING_TRANSACTION_SUCCESS,
        data
    }
}

function getTransactionsFailure(error) {
    return {
        type: FETCHING_TRANSACTION_FAILURE,
        error
    }
}