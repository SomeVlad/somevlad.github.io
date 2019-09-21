import { Endpoints } from 'endpoints'

export const postsRequest = async () => {
    const result = await fetch(Endpoints.posts)

    return await result.json()
}
