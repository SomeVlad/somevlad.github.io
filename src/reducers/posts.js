import {
    POSTS_GET,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE
} from 'actions'

export default (state = [], { type, payload }) => {
    switch (type) {
        case POSTS_GET_SUCCESS:
            return [...payload]
        case POSTS_GET_FAILURE:
            return {
                ...state,
                error: payload
            }
        case POSTS_GET:
        default:
            return state
    }
}
