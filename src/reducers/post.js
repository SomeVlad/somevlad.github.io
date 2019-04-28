import {
    POST_GET,
    POST_GET_FAILURE,
    POST_GET_SUCCESS,
    POSTS_GET_SUCCESS
} from 'actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case POSTS_GET_SUCCESS:
            return {}

        case POST_GET_SUCCESS:
            return {
                ...state,
                ...payload
            }

        case POST_GET_FAILURE:
        case POST_GET:
        default:
            return state
    }
}
