import { Endpoints } from 'endpoints'
import { posts as mockPosts } from 'mocks/posts'

export const postsRequest = async () => {
    const result = await fetch(Endpoints.posts)
    const { data } = await result.json()

    return data || mockPosts
}
