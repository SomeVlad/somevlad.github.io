import { postsRequest } from 'requests/posts'

export const POSTS_GET = 'POSTS_GET'
export const POSTS_GET_SUCCESS = 'POSTS_GET_SUCCESS'
export const POSTS_GET_FAILURE = 'POSTS_GET_FAILURE'

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
