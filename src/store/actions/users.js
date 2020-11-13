import * as actionTypes from '../actionTypes'
import axios from 'axios'

export const fetchUsers = () => {
  return dispatch => {
    dispatch(fetchUsersStart())
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        dispatch(fetchUsersSuccess(res))
      })
      .catch(err => {
        fetchUsersFail(err)
      })
  }
}

function fetchUsersStart() {
  return {
    type: actionTypes.FETCH_USERS_START
  }
}

function fetchUsersSuccess(users) {
  return {
    type: actionTypes.FETCH_USERS_SUCCESS,
    users: users
  }
}

function fetchUsersFail(error) {
  return {
    type: actionTypes.FETCH_USERS_FAIL,
    error: error
  }
}