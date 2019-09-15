import { Endpoints } from 'endpoints'
import { tags as mockTags } from 'mocks/tags'

export const tagsRequest = async () => {
    const result = await fetch(Endpoints.tags)
    const { data } = await result.json()

    return data || mockTags
}
