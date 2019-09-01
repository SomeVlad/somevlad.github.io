import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { Post, Page404 } from 'components'
import {
    selectLoadingPosts,
    selectPosts,
    selectSelectedPost
} from 'selectors'

class PostContainer extends Component {
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
    const posts = selectPosts(state)
    const isLoadingPosts = selectLoadingPosts(state)

    return ({
        post,
        posts,
        isLoadingPosts
    })
}

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)
