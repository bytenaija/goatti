import {
    FETCHING_INVESTMENT,
    FETCHING_INVESTMENT_SUCCESS,
    FETCHING_INVESTMENT_FAILURE
} from './types'

import InvestmentService from '../services/InvestmentService'

export const setInvestment = () => async dispatch => {
   
    dispatch(getInvestment())
    InvestmentService.getInvestments().then(investments =>{
        dispatch(getInvestmentSuccess(investments))
    }).catch(err =>{
        getInvestmentFailure(err)
    })
  
}

function getInvestment() {
    return {
        type: FETCHING_INVESTMENT
    }
}

function getInvestmentSuccess(data) {
    return {
        type: FETCHING_INVESTMENT_SUCCESS,
        data
    }
}

function getInvestmentFailure(error) {
    return {
        type: FETCHING_INVESTMENT_FAILURE,
        error
    }
}