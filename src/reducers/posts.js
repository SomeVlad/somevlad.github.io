import { POSTS_GET, POSTS_GET_FAILURE, POSTS_GET_SUCCESS } from 'actions'

const parser = new DOMParser()

export default (state = [], { type, payload }) => {
    switch (type) {
        case POSTS_GET_SUCCESS:
            return payload.map(post => ({
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
