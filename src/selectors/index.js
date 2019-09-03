import { getOr, pipe, find } from 'lodash/fp'
import { isSlugInPathname } from 'helpers'

export const selectPosts = getOr({}, ['posts'])

export const selectPostCollection = pipe([
    selectPosts,
    getOr({}, ['postCollection']),
])

export const selectPostIds = pipe([
    selectPosts,
    getOr([], ['postIds']),
])

export const selectSelectedPost = pipe([
    selectPostCollection,
    find(isSlugInPathname),
])

const selectLoading = getOr(null, 'loading')

export const selectLoadingPosts = pipe([
    selectLoading,
    getOr(false, ['loadingPosts']),
])
