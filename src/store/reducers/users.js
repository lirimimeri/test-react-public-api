import * as actionTypes from '../actionTypes'

const initialState = {
  users: [],
  loading: false,
  error: null
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USERS_START:return fetchUsersStart(state, action)
    case actionTypes.FETCH_USERS_SUCCESS: return fetchUsersSuccess(state, action)
    case actionTypes.FETCH_USERS_FAIL: return fetchUsersFail(state, action)
    default: return state
  }
}

function fetchUsersStart(state, action) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function fetchUsersSuccess(state, action) {
  return {
    ...state,
    loading: false,
    error: null,
    users: action.users
  }
}

function fetchUsersFail(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}



export default reducer