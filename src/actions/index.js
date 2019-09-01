import {
    postsRequest,
    tagsRequest
} from 'requests'
import { getSlugFromPathname } from 'helpers'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

export const TAGS_GET = 'TAGS_GET'
export const TAGS_GET_SUCCESS = 'TAGS_GET_SUCCESS'
export const TAGS_GET_FAILURE = 'TAGS_GET_FAILURE'

export const TAG_GET = 'TAG_GET'
export const TAG_GET_SUCCESS = 'TAG_GET_SUCCESS'
export const TAG_GET_FAILURE = 'TAG_GET_FAILURE'

export const getPosts = () => (dispatch, getState) => {
    dispatch({
        type: POSTS_GET
    })

    const { posts } = getState()

    if (posts.length > 0) {
        return dispatch({
            type: POSTS_GET_SUCCESS,
            payload: posts
        })
    }

    return postsRequest()
        .then(posts => dispatch({
            type: POSTS_GET_SUCCESS,
            payload: posts
        }))
        .catch(error => dispatch({
            type: POSTS_GET_FAILURE,
            payload: error
        }))
}

export const getTags = () => (dispatch, getState) => {
    dispatch({
        type: TAGS_GET
    })

    const { tags } = getState()

    if (tags.length > 0) {
        return dispatch({
            type: TAGS_GET_SUCCESS,
            payload: tags
        })
    }

    return tagsRequest()
        .then(tags => dispatch({
            type: TAGS_GET_SUCCESS,
            payload: tags
        }))
        .catch(error => dispatch({
            type: TAGS_GET_FAILURE,
            payload: error
        }))
}

export const getTag = () => (dispatch, getState) => {
    dispatch({
        type: TAG_GET
    })

    const { tags } = getState()
    const tag = tags.find(tags => tags.slug === getSlugFromPathname(window.location.pathname))

    if (tag) {
        return dispatch({
            type: TAG_GET_SUCCESS,
            payload: tag
        })
    }

    return dispatch({
        type: TAG_GET_FAILURE
    })
}
