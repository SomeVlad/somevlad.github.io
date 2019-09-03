import { pipe, getOr, pick, set, map } from 'lodash/fp'
import { postsRequest } from 'requests'
import { normalizePosts } from 'normalizers'

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
        'link',
        'slug',
        'date',
    ]),
])

export const resolvePosts = async () => {
    const response = await postsRequest()
    const processedPosts = map(processPost, response)

    const [postIds, postCollection] = normalizePosts(processedPosts)

    return { postIds, postCollection }
}
