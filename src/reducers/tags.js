import {
    TAGS_GET_SUCCESS,
} from 'actions'
import { createReducer } from 'helpers'

const INITIAL_STATE = {
    tagIds: [],
    tagCollection: {},
}

export default createReducer(INITIAL_STATE, {
    [TAGS_GET_SUCCESS]: (state, { payload }) => {
        const { tagIds, tagCollection } = payload

        return {
            tagIds,
            tagCollection,
        }
    },
})
