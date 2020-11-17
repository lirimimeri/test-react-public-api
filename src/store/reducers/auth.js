import * as actionTypes from "../actionTypes";

const initialState = {
  idToken: null,
  email: null,
  refreshToken: null,
  expiresIn: null,
  localId: null,
  loading: false,
  firstLogin: true,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
      return loginStart(state, action);
    case actionTypes.LOGIN_SUCCESS:
      return loginSuccess(state, action);
    case actionTypes.LOGIN_FAIL:
      return loginFail(state, action);
    case actionTypes.SIGN_UP_START:
      return signupStart(state, action);
    case actionTypes.SIGN_UP_SUCCESS:
      return signupSuccess(state, action);
    case actionTypes.SIGN_UP_FAIL:
      return signUpFail(state, action);
    case actionTypes.LOG_OUT:
      return logout(state, action)
    case actionTypes.FIRST_TIME: return firstTimeLoggedIn( state, action )
    default:
      return state;
  }
};

export default reducer;

function loginStart(state, action) {
  return {
    ...state,
    loading: true,
    error: null,
  };
}

function loginFail(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

function loginSuccess(state, action) {
  return {
    ...state,
    idToken: action.idToken,
    email: action.email,
    refreshToken: action.refreshToken,
    expiresIn: action.expiresIn,
    localId: action.localId,
    error: null,
  };
}

// =============sign up===================

function signupStart(state, action) {
  return {
    ...state,
    lading: true,
    error: null,
  };
}

function signUpFail(state, action) {
  return {
    ...state,
    loading: false,
    error: action.error,
  };
}

function signupSuccess(state, action) {
  return {
    ...state,
    idToken: action.data.idToken,
    email: action.data.email,
    refreshToken: action.data.refreshToken,
    expiresIn: action.data.expiresIn,
    localId: action.data.localId,
    error: null,
  };
}

// ===============end of signup ====================

function logout(state, action) {
  return {
    ...state,
    idToken: null,
    email: null,
    refreshToken: null,
    expiresIn: null,
    localId: null,
    loading: false,
    error: null,
    firstLogin: true
  }
}

function firstTimeLoggedIn(state, action) {
  return {
    ...state,
    firstLogin: false
  }
}