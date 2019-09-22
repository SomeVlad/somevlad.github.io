import { Endpoints } from 'endpoints'

export const tagsRequest = async () => {
    const result = await fetch(Endpoints.tags, { mode: 'no-cors' })

    return await result.json()
}

export const postsRequest = async () => {
    const result = await fetch(Endpoints.posts, { mode: 'no-cors' })

    return await result.json()
}
