import { getOr, pipe, find } from 'lodash/fp'

export const selectPosts = getOr({}, ['posts'])

export const selectPostCollection = pipe([
    selectPosts,
    getOr({}, ['postCollection']),
])

export const selectPostIds = pipe([
    selectPosts,
    getOr([], ['postIds']),
])

export const selectSelectedPost = slug => pipe([
    selectPostCollection,
    find(post => post.slug === slug),
])

