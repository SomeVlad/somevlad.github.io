import {
    POSTS_GET_SUCCESS
} from 'actions'
import {createReducer} from 'helpers'

const INITIAL_STATE = {
    postIds: [],
    postCollection: []
}

export default createReducer(INITIAL_STATE, {
    [POSTS_GET_SUCCESS]: (state, { payload }) => {
        const { postIds, postCollection } = payload

        return {
            postIds,
            postCollection
        }
    },
})
