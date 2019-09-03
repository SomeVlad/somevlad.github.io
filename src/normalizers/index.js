import { schema, normalize } from 'normalizr'
import { getOr } from 'lodash/fp'

const postSchema = new schema.Entity('post', {}, { idAttribute: 'id' })

export const normalizePosts = posts => {
    const { entities, result } = normalize(posts, [postSchema])
    const collection = getOr({}, ['post'], entities)

    return [result, collection]
}
