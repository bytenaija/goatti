import {
    LIKE_FEED,
    LIKE_FEED_SUCCESS,
    LIKE_FEED_FAILURE,
    DIS_LIKE_FEED,
    DIS_LIKE_FEED_SUCCESS,
    DIS_LIKE_FEED_FAILURE,
    FAVOURITE_FEED,
    FAVOURITE_FEED_SUCCESS,
    FAVOURITE_FEED_FAILURE,
    UN_FAVOURITE_FEED,
UN_FAVOURITE_FEED_SUCCESS,
UN_FAVOURITE_FEED_FAILURE,
GET_FEEDS,
GET_FEEDS_SUCCESS,
GET_FEEDS_FAILURE,
FEEDS_UNLIKE,
FEEDS_UNDISLIKE
} from './types'

import FeedService from '../services/FeedService'

export const getFeeds = () => async dispatch =>{
    dispatch(gettingFeeds())
    FeedService.getFeeds().then(feeds =>{
        dispatch(getFeedSuccess(feeds))
    })
}

const gettingFeeds = () =>{
    return {
        type: GET_FEEDS
    }
}


const getFeedSuccess = (feeds) =>{
    return {
        type: GET_FEEDS_SUCCESS,
        feeds
    }
}

export const likeFeedAction = (id) => async dispatch => {
    dispatch(likeFeed())
    FeedService.likeFeed(id).then(feeds => {
        console.log("Likkkekeke", feeds)
        dispatch(likeFeedSuccess(feeds))
    }).catch(err => {
        likeFeedFailure(err)
    })

}

function likeFeed() {
    return {
        type: LIKE_FEED
    }
}

function likeFeedSuccess(feeds) {
    return {
        type: LIKE_FEED_SUCCESS,
        feeds
    }
}

function likeFeedFailure(error) {
    return {
        type: LIKE_FEED_FAILURE,
        error
    }
}


//dislike feeds


export const dislikeFeedAction = (id) => async dispatch => {
   
    dispatch(dislikeFeed())
    FeedService.dislikeFeed(id).then(feeds => {
        console.log("disliisisisis", feeds)
        dispatch(dislikeFeedSuccess(feeds))
    }).catch(err => {
        dislikeFeedFailure(err)
    })

}

function dislikeFeed() {
    return {
        type: DIS_LIKE_FEED
    }
}

function dislikeFeedSuccess(feeds) {
    return {
        type: DIS_LIKE_FEED_SUCCESS,
        feeds
    }
}

function dislikeFeedFailure(error) {
    return {
        type: DIS_LIKE_FEED_FAILURE,
        error
    }
}



export const favouriteFeedAction = (id) => async dispatch => {
    dispatch(favouriteFeed())
    FeedService.favouriteFeed(id).then(feeds => {
        dispatch(favouriteFeedSuccess(feeds))
    }).catch(err => {
        favouriteFeedFailure(err)
    })

}

function favouriteFeed() {
    return {
        type: FAVOURITE_FEED
    }
}

function favouriteFeedSuccess(feeds) {
    return {
        type: FAVOURITE_FEED_SUCCESS,
        feeds
    }
}

function favouriteFeedFailure(error) {
    return {
        type: FAVOURITE_FEED_FAILURE,
        error
    }
}




export const unFavouriteFeedAction = (id) => async dispatch => {
    console.log("unfavourite", id)
    dispatch(unFavouriteFeed())
    FeedService.unFavouriteFeed(id).then(feeds => {
        console.log("unfavourite feeds", feeds)
        dispatch(unFavouriteFeedSuccess(feeds))
    }).catch(err => {
        console.log(err)
        unFavouriteFeedFailure(err)
    })

}

function unFavouriteFeed() {
    return {
        type: UN_FAVOURITE_FEED
    }
}

function unFavouriteFeedSuccess(feeds) {
    return {
        type: UN_FAVOURITE_FEED_SUCCESS,
        feeds
    }
}

function unFavouriteFeedFailure(error) {
    return {
        type: UN_FAVOURITE_FEED_FAILURE,
        error
    }
}

export const unlike = (id) => async dispatch =>{
    
    FeedService.unlike(id).then(feeds => {
        dispatch(unlikeFeedSuccess(feeds))
    })
}

const unlikeFeedSuccess = (feeds) =>{
    return {
        type: FEEDS_UNLIKE,
        feeds
    }
}

export const undislike = (id) => async dispatch =>{
    
    FeedService.undislike(id).then(feeds => {
        dispatch(undislikeSuccess(feeds))
    })
}

const undislikeSuccess = (feeds) =>{
    return {
        type: FEEDS_UNDISLIKE,
        feeds
    }
}