import { getOr, pipe, find, filter } from 'lodash/fp'

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

export const selectPostCollectionByTagId = tagId => pipe([
    selectPostCollection,
    filter(post => post.tags.includes(tagId)),
])
