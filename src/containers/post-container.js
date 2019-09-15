import React, { Component } from 'react'
import { connect } from 'react-redux'
import { keys, size, getOr } from 'lodash/fp'
import * as PropTypes from 'prop-types'
import { getPosts } from 'actions'
import { Post, Page404 } from 'components'
import {
    selectPostCollection,
    selectSelectedPost,
} from 'selectors/posts'
import {
    selectLoadingPosts,
} from 'selectors/loading'

class PostContainer extends Component {
    static propTypes = {
        posts: PropTypes.object,
        post: PropTypes.object,
        isLoadingPosts: PropTypes.bool,
        getPosts: PropTypes.func,
    }

    componentDidMount() {
        const { posts, getPosts } = this.props

        if (size(keys(posts)) === 0) {
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

const mapStateToProps = (state, { match }) => {
    const selectedPostInSlug = getOr(null, ['params', 'post'])(match)
    const post = selectSelectedPost(selectedPostInSlug)(state)
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
