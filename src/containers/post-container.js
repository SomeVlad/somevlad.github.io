import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { Header, Post } from 'components'
import { getPostSlugFromPathname } from 'helpers'

class PostContainer extends Component {
    componentDidMount() {
        const { getPosts } = this.props
        if (getPosts) {
            getPosts()
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

const mapStateToProps = ({ posts }) => {
    const post = posts.find(post => post.slug === getPostSlugFromPathname(window.location.pathname))
    return {
        post
    }
}

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostContainer)
