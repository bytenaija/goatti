import { FETCHING_SAVED_ITEM_SUCCESS, ADDING_SAVED_ITEM_SUCCESS, REMOVE_SAVED_ITEM_SUCCESS } from './types';

import SavedItemService from '../services/SavedItemService'

export const getSavedItems = () => async dispatch => {
    const  savedItems = await SavedItemService.getSavedItems();

    console.log("Prodododododo in actions", savedItems)
   
     dispatch(getSavedItemSuccess(savedItems))
}

export const addSavedItem = (id) => async dispatch => {
    const  savedItem = await SavedItemService.addSavedItem(id);
   
     dispatch(saveItemSuccess(savedItem))
}


function getSavedItemSuccess(savedItems){
    return {
        type: FETCHING_SAVED_ITEM_SUCCESS,
        savedItems
    }
}

function saveItemSuccess(savedItem){
    console.log("fjfjkkdkdkdkd", savedItem)
    return {
        type: ADDING_SAVED_ITEM_SUCCESS,
        savedItem
    }
}

export const removeSavedItem = (id) => async dispatch =>{
    SavedItemService.removeSavedItem(id).then(item =>{
        dispatch(removeItemSuccess(id))
    })
}

function removeItemSuccess(id){
    return {
        type: REMOVE_SAVED_ITEM_SUCCESS,
        id
    }
}