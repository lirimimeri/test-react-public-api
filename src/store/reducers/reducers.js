import { combineReducers } from 'redux';

import settingsReducer from './settings.reducer.js';
import themesReducer from './themes.reducers.js';
import usersReducer from './users'
import todosReducer from './todos'
import photosReducer from './photos'
import postsReducer from './posts'

export default combineReducers({
    settings: settingsReducer,
    theme: themesReducer,
    users: usersReducer,
    todos: todosReducer,
    photos: photosReducer,
    posts: postsReducer
});
