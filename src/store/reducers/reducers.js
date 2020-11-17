import { combineReducers } from 'redux';

import settingsReducer from './settings.reducer.js';
import themesReducer from './themes.reducers.js';
import usersReducer from './users'
import todosReducer from './todos'
import postsReducer from './posts'
import loginReducer from './auth'

export default combineReducers({
    settings: settingsReducer,
    theme: themesReducer,
    users: usersReducer,
    todos: todosReducer,
    posts: postsReducer,
    loginData: loginReducer
});
