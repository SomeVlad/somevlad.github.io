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
                {posts.map(({ heading, contents }, index) => (
                        <Post
                            key={index}
                            heading={heading}
                            contents={contents} />
                    )
                )}
            </div>
        )
    }
}

export { Posts }
