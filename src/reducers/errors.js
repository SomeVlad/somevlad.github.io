import {
    POSTS_GET_FAILURE,
    TAGS_GET_FAILURE,
} from 'actions'

export default (_, { type }) => {
    switch (type) {
        case TAGS_GET_FAILURE:
        case POSTS_GET_FAILURE: {
            return 404
        }
        default:
            return null
    }
}
