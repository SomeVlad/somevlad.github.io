import { schema, normalize } from 'normalizr'
import { getOr } from 'lodash/fp'

const postSchema = new schema.Entity('post', {}, { idAttribute: 'id' })
const tagSchema = new schema.Entity('tag', {}, { idAttribute: 'id' })

export const normalizePosts = posts => {
    const { entities, result } = normalize(posts, [postSchema])
    const collection = getOr({}, ['post'], entities)

    return [result, collection]
}

export const normalizeTags = tags => {
    const { entities, result } = normalize(tags, [tagSchema])
    const collection = getOr({}, ['tag'], entities)

    return [result, collection]
}
