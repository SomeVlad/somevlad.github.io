import {
    POST_GET,
    POST_GET_SUCCESS,
} from 'actions'

export default (state = {}, { type, payload }) => {
    switch (type) {
        case POST_GET_SUCCESS:
            return {
                ...state,
                ...payload
            }

        case POST_GET:
            debugger
            if (payload && payload.isSamePost) {
                return state
            }
            return {}

        default:
            return state
    }
}
