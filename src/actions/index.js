import { size, keys } from 'lodash/fp'
import { resolvePosts, resolveTags } from 'resolvers'
import {
    selectPostCollection,
    selectPosts,
} from 'selectors/posts'
import { selectTagCollection, selectTags } from 'selectors/tags'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

export const TAGS_GET = 'TAGS_GET'
export const TAGS_GET_SUCCESS = 'TAGS_GET_SUCCESS'
export const TAGS_GET_FAILURE = 'TAGS_GET_FAILURE'

export const getPosts = () => (dispatch, getState) => {
    dispatch({
        type: POSTS_GET,
    })

    const state = getState()
    const postCollection = selectPostCollection(state)

    if (size(keys(postCollection)) > 0) {
        return dispatch({
            type: POSTS_GET_SUCCESS,
            payload: selectPosts(state),
        })
    }

    return resolvePosts()
        .then(posts => dispatch({
            type: POSTS_GET_SUCCESS,
            payload: posts,
        }))
        .catch(error => dispatch({
            type: POSTS_GET_FAILURE,
            payload: error,
        }))
}

export const getTags = () => (dispatch, getState) => {
    dispatch({
        type: TAGS_GET,
    })

    const state = getState()
    const tagCollection = selectTagCollection(state)

    if (size(keys(tagCollection)) > 0) {
        return dispatch({
            type: TAGS_GET_SUCCESS,
            payload: selectTags(state),
        })
    }

    return resolveTags()
        .then(tags => dispatch({
            type: TAGS_GET_SUCCESS,
            payload: tags,
        }))
        .catch(error => dispatch({
            type: TAGS_GET_FAILURE,
            payload: error,
        }))
}
