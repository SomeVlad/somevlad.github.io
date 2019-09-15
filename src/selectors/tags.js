import { getOr, pipe, find } from 'lodash/fp'

export const selectTags = getOr({}, ['tags'])

export const selectTagCollection = pipe([
    selectTags,
    getOr({}, ['tagCollection']),
])

export const selectTagIds = pipe([
    selectTags,
    getOr([], ['tagIds']),
])

export const selectSelectedTag = slug => pipe([
    selectTagCollection,
    find(tag => tag.slug === slug),
])
