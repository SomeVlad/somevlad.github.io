import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { Post } from 'components/post'

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.array,
        getPosts: PropTypes.func
    }

    static defaultProps = {
        posts: []
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { posts } = this.props
        if (posts.length === 0) {
            return 'loading...'
        }
        return (
            <div>
                {posts.map(({ title, content }, index) => (
                        <Post
                            key={index}
                            title={title}
                            content={content} />
                    )
                )}
            </div>
        )
    }
}

export { Posts }
