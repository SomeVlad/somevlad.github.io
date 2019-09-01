import { getOr, pipe, find } from 'lodash/fp'
import { isSlugInPathname } from 'helpers'


export const selectPostCollection = getOr({}, ['posts', 'postCollection'])
export const selectSelectedPost = pipe([
    selectPostCollection,
    find(isSlugInPathname),
])

const selectLoading = getOr(null, 'loading')
export const selectLoadingPosts = pipe([
    selectLoading,
    getOr(false, ['loadingPosts'])
])
