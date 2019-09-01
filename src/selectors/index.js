import { getOr, pipe, find } from 'lodash/fp'
import { isSlugInPathname } from 'helpers'


export const selectPosts = getOr([], ['posts'])
export const selectSelectedPost = pipe([
    selectPosts,
    find(isSlugInPathname),
])

const selectLoading = getOr(null, 'loading')
export const selectLoadingPosts = pipe([
    selectLoading,
    getOr(false, ['loadingPosts'])
])
