import { combineReducers } from 'redux'
import postsReducer from './posts'
import postReducer from './post'
import errorsReducer from './errors'

export default combineReducers({
    posts: postsReducer,
    selectedPost: postReducer,
    errors: errorsReducer
})
