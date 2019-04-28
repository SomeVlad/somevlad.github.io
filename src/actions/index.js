import { postsRequest } from 'requests/posts'
import { getPostSlugFromPathname } from 'helpers'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

export const POST_GET = 'POST_GET'
export const POST_GET_SUCCESS = 'POST_GET_SUCCESS'
export const POST_GET_FAILURE = 'POST_GET_FAILURE'

export const getPosts = () => {
    return (dispatch, getState) => {
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
}

export const getPost = () => {
    return (dispatch, getState) => {
        dispatch({
            type: POST_GET
        })

        const { posts } = getState()

        const post = posts.find(post => post.slug === getPostSlugFromPathname(window.location.pathname))

        if (post) {
            return dispatch({
                type: POST_GET_SUCCESS,
                payload: post
            })
        }

        return dispatch({
            type: POST_GET_FAILURE
        })
    }
}
