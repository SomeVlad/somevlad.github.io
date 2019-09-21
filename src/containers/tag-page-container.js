import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOr } from 'lodash/fp'
import * as PropTypes from 'prop-types'
import { Page404 } from 'components/404'
import { Tag } from 'components/tag-page'
import {
    selectSelectedTag,
} from 'selectors/tags'
import { selectLoadingTags } from 'selectors/loading'
import {
    getPosts,
} from 'actions'
import { selectPostCollectionByTagId } from 'selectors/posts'

class TagPageContainer extends Component {
    static propTypes = {
        tag: PropTypes.object,
        isLoadingTags: PropTypes.bool,
        postsFilteredByTag: PropTypes.array,
        getPosts: PropTypes.func,
    }

    componentDidMount() {
        const { getPosts } = this.props

        getPosts()
    }

    render() {
        const {
            tag,
            isLoadingTags,
            postsFilteredByTag,
        } = this.props

        if (isLoadingTags) {
            return 'loading...'
        }

        if (!tag) {
            return <Page404 />
        }

        return (
            <Tag {...tag} posts={postsFilteredByTag} />
        )
    }
}

const mapStateToProps = (state, { match }) => {
    const selectedTagInSlug = getOr(null, ['params', 'tag'])(match)
    const tag = selectSelectedTag(selectedTagInSlug)(state)
    const selectedTagId = getOr(null, ['id'], tag)

    return ({
        tag,
        isLoadingTags: selectLoadingTags(state),
        postsFilteredByTag: selectPostCollectionByTagId(selectedTagId)(state),
    })
}

const mapDispatchToProps = ({
    getPosts,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TagPageContainer)
