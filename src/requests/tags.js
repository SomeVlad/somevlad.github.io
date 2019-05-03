import axios from 'axios'
import { Endpoints } from 'endpoints'
import { tags as mockTags } from 'mocks/tags'

export const tagsRequest = () => {
    return axios
        .get(Endpoints.tags)
        .then(result => result.data)
        .catch(() => mockTags)
}
