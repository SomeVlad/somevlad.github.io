import React from 'react'
import * as PropTypes from 'prop-types'
import { PostPreview } from 'components/post-preview'

export const Tag = ({ posts }) => (
    posts.map(post => <PostPreview key={post.id} {...post} />)
)

Tag.propTypes = {
    posts: PropTypes.array,
}
