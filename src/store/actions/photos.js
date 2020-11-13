import * as actionTypes from '../actionTypes'
import axios from 'axios'

export const fetchPhotos = () => {
  return dispatch => {
    // dispatch(fetchPhotosStart())
    // axios.get('https://jsonplaceholder.typicode.com/photos')
    //   .then(res => {
    //     dispatch(fetchPhotosSuccess(res.data.slice(0,10)))
    //   })
    //   .catch(err => {
    //     dispatch(fetchPhotosFail(err))
    //   })
  }
}

function fetchPhotosStart() {
  return {
    type: actionTypes.FETCH_PHOTOS_START,
  }
}

function fetchPhotosSuccess(data) {
  return {
    type: actionTypes.FETCH_PHOTOS_SUCCESS,
    photos: data
  }
}

function fetchPhotosFail(error) {
  return {
    type: actionTypes.FETCH_PHOTOS_FAIL,
    error: error
  }
}