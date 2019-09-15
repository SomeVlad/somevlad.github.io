import {
    pipe,
    getOr,
    pick,
    set,
    map,
    orderBy,
    reject,
} from 'lodash/fp'
import { postsRequest, tagsRequest } from 'requests'
import { normalizePosts, normalizeTags } from 'normalizers'

const parser = new DOMParser()

const parseFromStringAsText = content => [
    ...parser
        .parseFromString(content, 'text/html')
        .body
        .childNodes,
]

const getParsedContents = pipe([
    getOr('', ['content', 'rendered']),
    parseFromStringAsText,
])

const getHeading = getOr('', ['title', 'rendered'])

const setParsedContents = post => set(['contents'], getParsedContents(post), post)

const setHeading = post => set(['heading'], getHeading(post), post)

const processPost = pipe([
    setParsedContents,
    setHeading,
    pick([
        'id',
        'heading',
        'contents',
        'slug',
        'date',
    ]),
])

const processTag = pick([
    'count',
    'id',
    'name',
    'slug',
])

export const resolvePosts = async () => {
    const response = await postsRequest()
    const processedPosts = map(processPost, response)

    const [postIds, postCollection] = normalizePosts(processedPosts)

    return { postIds, postCollection }
}

export const resolveTags = async () => {
    const response = await tagsRequest()

    const processedTags = pipe([
        map(processTag),
        reject(['count', 0]),
        orderBy(['count', 'name'], ['desc', 'asc']),
    ])(response)

    const [tagIds, tagCollection] = normalizeTags(processedTags)

    return { tagIds, tagCollection }
}
