import {
    TAG_GET_FAILURE
} from 'actions'

export default (state = null, { type }) => {
    switch (type) {
        case TAG_GET_FAILURE:
            return 404
        default:
            return null
    }
}
