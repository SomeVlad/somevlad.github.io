import {
    POSTS_GET,
    POSTS_GET_SUCCESS,
    POSTS_GET_FAILURE
} from 'actions'

const parser = new DOMParser()

export default (state = [], { type, payload }) => {
    switch (type) {
        case POSTS_GET_SUCCESS:
            const posts = payload.map(post => ({
                    ...post,
                    contents: [
                        ...parser
                            .parseFromString(post.content.rendered, 'text/html')
                            .body
                            .childNodes
                    ],
                    heading: post.title.rendered
                }
            ))

            debugger
            return posts
        case POSTS_GET_FAILURE:
            return {
                ...state,
                error: payload
            }
        case POSTS_GET:
        default:
            return state
    }
}
