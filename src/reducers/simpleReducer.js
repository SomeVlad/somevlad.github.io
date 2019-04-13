export default (state = {}, { type, payload }) => {
    switch (type) {
        case 'SIMPLE_ACTION':
            return {
                ...state,
                simpleAction: payload
            }
        default:
            return state
    }
}
