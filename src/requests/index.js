import { Endpoints } from 'endpoints'

export const tagsRequest = async () => {
    const result = await fetch(Endpoints.tags)

    return await result.json()
}

export const postsRequest = async () => {
    const result = await fetch(Endpoints.posts)

    return await result.json()
}
