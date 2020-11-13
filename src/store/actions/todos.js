import * as actionTypes from '../actionTypes'
import axios from 'axios'

export const fetchTodos = () => {
  return ( dispatch ) => {
    dispatch(fetchTodosStart())
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        dispatch(fetchTodosSuccess(res.data))
      })
      .catch(err => {
        dispatch(fetchTodosFail())
      })
  }
}

function fetchTodosStart() {
  return {
    type: actionTypes.FETCH_TODOS_START
  }
}

function fetchTodosSuccess(data) {
  return {
    type: actionTypes.FETCH_TODOS_SUCCESS,
    todos: data
  }
}

function fetchTodosFail() {
  return {
    type: actionTypes.FETCH_TODOS_FAIL
  }
}