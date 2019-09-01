import React, { Component } from 'react'
import { Posts } from 'components'

export class MainPage extends Component {
    componentDidMount() {
        const { getPosts } = this.props
        if (getPosts) {
            getPosts()
        }
    }

    render() {
        const { posts } = this.props
        return (
            <Posts posts={posts} />
        )
    }
}
