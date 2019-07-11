import {
    CREATE_FARM,
    CREATE_FARM_SUCCESS,
    CREATE_FARM_FAILURE
} from './types'

import FarmService from '../services/FarmServices'

export const createFarm = (numberOfGoats, profit, amountInvested, id=null) => async dispatch => {
    dispatch(createFarms())
        FarmService.createFarm(numberOfGoats, profit, amountInvested).then(farm =>{
            dispatch(createFarmsSuccess(farm))
        }).catch(err =>{
            createFarmsFailure(err)
        })

}


function createFarms() {
    return {
        type: CREATE_FARM
    }
}

function createFarmsSuccess(data) {
    return {
        type: CREATE_FARM_SUCCESS,
        data
    }
}

function createFarmsFailure(error) {
    return {
        type: CREATE_FARM_FAILURE,
        error
    }
}