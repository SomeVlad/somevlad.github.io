import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { Header, Posts } from 'components'

const MainPage = ({ posts, getPosts }) => (
    <Fragment>
        <Header />
        <Posts
            posts={posts}
            getPosts={getPosts} />
    </Fragment>
)

const mapStateToProps = ({ posts }) => ({
    posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainPage)
