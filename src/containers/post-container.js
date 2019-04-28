import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getPost, getPosts } from 'actions'
import { Header, Post } from 'components'

class PostContainer extends Component {
    componentDidMount() {
        const { posts, getPost, getPosts } = this.props

        if (posts.length > 0) {
            getPost()
        } else {
            getPosts()
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.posts.length !== this.props.posts.length) {
            this.props.getPost()
        }
    }

    render() {
        const { post } = this.props
        return (
            <Fragment>
                <Header />
                <Post {...post} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ selectedPost, posts }) => {
    return ({
        post: selectedPost,
        posts
    })
}

const mapDispatchToProps = {
    getPost,
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)
