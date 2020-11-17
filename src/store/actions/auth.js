import * as actionTypes from '../actionTypes'
import axios from 'axios'

const LOGIN_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAd-_48bU77rNTzDEKoeXl6t9U17AuwMgg'
const SIGNUP_URL = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAd-_48bU77rNTzDEKoeXl6t9U17AuwMgg'

export function login(email, password) {
  return dispatch => {
    dispatch(loginStart())
  
    const reqPayload = {
      email: email,
      password: password,
      returnSecureToken: true
    }
  
    axios.post( LOGIN_URL, reqPayload )
      .then(res => {
        const { idToken, email, refreshToken, expiresIn, localId } = res.data
        clearStorage()
        dispatch(loginSuccess( idToken, email, refreshToken, expiresIn, localId ))
        localStorage.setItem('token', idToken)
        localStorage.setItem('email', email)
      })
      .catch(error => {
        dispatch(loginFail(error.response.data.error.message))
        console.log(error)
      })
  }
}

export function signup(email, password) {
  return dispatch => {
    dispatch(signupStart())
    const reqPayload = {
      email,
      password,
      returnSecureToken: true
    }
    axios.post(SIGNUP_URL, reqPayload)
      .then(res => {
        dispatch(signupSuccess(res.data))
        clearStorage()
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('email', res.data.email)
      })
      .catch(error => {
        dispatch(signupFail(error.response.data.error.message))
      })
  }
}

export function logout() {
  clearStorage()
  return {
    type: actionTypes.LOG_OUT
  }
}

export function firstLogin() {
  return {
    type: actionTypes.FIRST_TIME
  }
}

// =============log in methods===============

function loginStart() {
  return {
    type: actionTypes.LOGIN_START,
  }
}

function loginFail(err) {
  return {
    type: actionTypes.LOGIN_FAIL,
    error: err
  }
}

function loginSuccess(idToken, email, refreshToken, expiresIn, localId) {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    loading: false,
    idToken,
    email,
    refreshToken,
    expiresIn,
    localId
  }
}

// ==============sign up methods===================




function signupStart() {
  return {
    type: actionTypes.SIGN_UP_START,
  }
}

function signupSuccess(data) {
  return {
    type: actionTypes.SIGN_UP_SUCCESS,
    data
  }
}

function signupFail(error) {
  return {
    type: actionTypes.SIGN_UP_FAIL,
    error
  }
}


function clearStorage() {
  localStorage.removeItem('token')
  localStorage.removeItem('email')
}



