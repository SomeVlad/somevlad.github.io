import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getOr } from 'lodash/fp'
import * as PropTypes from 'prop-types'
import { Tag, Page404 } from 'components'
import {
    selectSelectedTag,
    selectTagCollection,
} from 'selectors/tags'
import { selectLoadingTags } from 'selectors/loading'

class TagPageContainer extends Component {
    static propTypes = {
        tags: PropTypes.object,
        tag: PropTypes.object,
        isLoadingTags: PropTypes.bool,
        getTags: PropTypes.func,
    }

    render() {
        const { tag, isLoadingTags } = this.props

        if (isLoadingTags) {
            return 'loading...'
        }

        if (!tag) {
            return <Page404 />
        }

        return (
            <Tag {...tag} />
        )
    }
}

const mapStateToProps = (state, { match }) => {
    const selectedTagInSlug = getOr(null, ['params', 'tag'])(match)
    const tag = selectSelectedTag(selectedTagInSlug)(state)
    const tags = selectTagCollection(state)
    const isLoadingTags = selectLoadingTags(state)

    return ({
        tag,
        tags,
        isLoadingTags,
    })
}

export default connect(mapStateToProps)(TagPageContainer)
