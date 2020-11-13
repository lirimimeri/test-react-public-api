import * as actionTypes from '../actionTypes'

const initialState = {
  todos: null,
  loading: false,
  error: null
}

const reducer = ( state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_TODOS_START: return fetchTodosStart(state, action)
    case actionTypes.FETCH_TODOS_SUCCESS: return fetchTodosSuccess(state, action)
    case actionTypes.FETCH_TODOS_FAIL: return fetchTodosFail(state, action)
    default: return state
  }
}

function fetchTodosStart(state, action) {
  return {
    ...state,
    loading: true,
    error: null
  }
}

function fetchTodosSuccess(state ,action) {
  return {
    ...state,
    todos: action.todos,
    loading: false,
    error: null
  }
}

function fetchTodosFail(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error
  }
}

export default reducer