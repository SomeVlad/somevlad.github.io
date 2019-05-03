import { combineReducers } from 'redux'
import postsReducer from './posts'
import postReducer from './post'
import errorsReducer from './errors'
import tagsReducer from './tags'
import tagReducer from './tag'

export default combineReducers({
    posts: postsReducer,
    selectedPost: postReducer,
    errors: errorsReducer,
    tags: tagsReducer,
    selectedTag: tagReducer
})
