import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { Post } from 'components/post'

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array
    }

    render() {
        const { posts } = this.props
        if (posts.length === 0) {
            return 'loading...'
        }

        return (
            <div>
                {posts.map((post, index) => (
                        <Post
                            key={index}
                            {...post} />
                    )
                )}
            </div>
        )
    }
}

export { Posts }
