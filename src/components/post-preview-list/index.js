import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { PostPreview } from 'components'

export class PostPreviewList extends Component {
    static propTypes = {
        posts: PropTypes.objectOf(
            PropTypes.shape({
                id: PropTypes.number,
                slug: PropTypes.string,
                contents: PropTypes.array,
                heading: PropTypes.string,
                date: PropTypes.string,
            })
        ),
        postIds: PropTypes.arrayOf(PropTypes.number),
        getPosts: PropTypes.func,
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { posts, postIds } = this.props

        return postIds.map(id => <PostPreview key={id} {...posts[id]} />)
    }
}
