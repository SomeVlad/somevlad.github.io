import { combineReducers } from 'redux'
import postsReducer from './posts'
import errorsReducer from './errors'
import tagsReducer from './tags'
import tagReducer from './tag'
import loadingReducer from './loading'

export default combineReducers({
    posts: postsReducer,
    errors: errorsReducer,
    tags: tagsReducer,
    selectedTag: tagReducer,
    loading: loadingReducer,
})
