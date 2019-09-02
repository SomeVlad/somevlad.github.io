import {
    POSTS_GET,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE,
    TAGS_GET,
    TAGS_GET_FAILURE,
    TAG_GET_SUCCESS,
} from 'actions'

export default (state = null, { type }) => {
    switch (type) {
        case POSTS_GET:
            return {
                ...state,
                loadingPosts: true,
            }
        case POSTS_GET_FAILURE:
        case POSTS_GET_SUCCESS:
            return {
                ...state,
                loadingPosts: false,
            }
        case TAGS_GET:
            return {
                ...state,
                loadingTags: true,
            }
        case TAG_GET_SUCCESS:
        case TAGS_GET_FAILURE:
            return {
                ...state,
                loadingTags: false,
            }
        default:
            return state
    }
}
