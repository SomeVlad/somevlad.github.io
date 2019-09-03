import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { getPosts } from 'actions'
import { Post, Page404 } from 'components'
import {
    selectLoadingPosts,
    selectPostCollection,
    selectSelectedPost,
} from 'selectors'

class PostContainer extends Component {
    static propTypes = {
        posts: PropTypes.object,
        getPosts: PropTypes.func,
        post: PropTypes.object,
        isLoadingPosts: PropTypes.bool,
    }

    componentDidMount() {
        const { posts, getPosts } = this.props

        if (posts.length === 0) {
            getPosts()
        }
    }

    render() {
        const { post, isLoadingPosts } = this.props

        if (isLoadingPosts) {
            return 'loading...'
        }

        if (!post) {
            return <Page404 />
        }

        return (
            <Post {...post} />
        )
    }
}

const mapStateToProps = state => {
    const post = selectSelectedPost(state)
    const posts = selectPostCollection(state)
    const isLoadingPosts = selectLoadingPosts(state)

    return ({
        post,
        posts,
        isLoadingPosts,
    })
}

const mapDispatchToProps = {
    getPosts,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)
