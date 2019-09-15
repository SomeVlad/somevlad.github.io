import { getOr, pipe } from 'lodash/fp'

const selectLoading = getOr(null, 'loading')

export const selectLoadingPosts = pipe([
    selectLoading,
    getOr(false, ['loadingPosts']),
])

export const selectLoadingTags = pipe([
    selectLoading,
    getOr(false, ['loadingTags']),
])
