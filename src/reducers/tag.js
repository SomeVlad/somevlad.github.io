import {
    TAG_GET_SUCCESS,
} from 'actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case TAG_GET_SUCCESS:
            return {
                ...payload
            }

        default:
            return state
    }
}
