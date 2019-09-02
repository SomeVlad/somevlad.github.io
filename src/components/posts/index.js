import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { PostPreview } from 'components'

class Posts extends Component {
    static propTypes = {
        posts: PropTypes.objectOf(
            PropTypes.shape({
                id: PropTypes.number,
                slug: PropTypes.string,
                contents: PropTypes.array,
                link: PropTypes.string,
                heading: PropTypes.string,
            })
        ) }

    render() {
        const { posts } = this.props

        return (
            <div>
                {Object.values(posts).map(post => (
                    <PostPreview
                        key={post.id}
                        {...post} />
                ))}
            </div>
        )
    }
}

export { Posts }
