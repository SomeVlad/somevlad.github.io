import {
    POSTS_GET_FAILURE,
    TAG_GET_FAILURE,
} from 'actions'

export default (_, { type }) => {
    switch (type) {
        case POSTS_GET_FAILURE:
        case TAG_GET_FAILURE: {
            return 404
        }
        default:
            return null
    }
}
