import React, { Component } from 'react'
import * as PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { Post } from 'components/post'

class MainPageContainer extends Component {
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
                {posts.map(Post)}
            </div>
        )
    }
}

const mapStateToProps = ({ posts }) => ({
    posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPageContainer)
