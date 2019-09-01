import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Posts } from 'components'

export class MainPage extends Component {
    static propTypes = {
        posts: PropTypes.object,
        getPosts: PropTypes.func
    }

    componentDidMount() {
        this.props.getPosts()
    }

    render() {
        const { posts } = this.props
        return (
            <Posts posts={posts} />
        )
    }
}
