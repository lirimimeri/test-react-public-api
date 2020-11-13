import * as actionTypes from '../actionTypes'

const initialState = {
  photos: [],
  loading: false,
  error: null
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PHOTOS_START: return 
    case actionTypes.FETCH_PHOTOS_SUCCESS: return 
    case actionTypes.FETCH_PHOTOS_FAIL: return 
    default: return state
  }
}

function fetchPhotosStart(state, action) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function fetchPhotosSuccess(state, action) {
  return {
    ...state,
    photos: action.photos,
    error: null,
    loading: false
  }
}

function fetchPhotosFail(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}

export default reducer