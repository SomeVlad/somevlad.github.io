import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as PropTypes from 'prop-types'
import { Tag } from 'components'
import { getTag } from 'actions'

class TagPageContainer extends Component {
    static propTypes = {
        selectedTag: PropTypes.object,
        getTag: PropTypes.func,
        tags: PropTypes.array,
        location: PropTypes.object,
    }

    componentDidMount() {
        const { selectedTag, getTag } = this.props

        if (!selectedTag.id) {
            getTag()
        }
    }

    componentDidUpdate(prevProps) {
        const { tags, getTag, location } = this.props
        const isTagsChanged = prevProps.tags.length !== tags.length
        const isLocationChanged = prevProps.location.pathname !== location.pathname

        if (isTagsChanged || isLocationChanged) {
            getTag()
        }
    }

    render() {
        const { selectedTag } = this.props

        return (
            <Tag tag={selectedTag} />
        )
    }
}

const mapStateToProps = ({ selectedTag, tags }) => ({
    selectedTag,
    tags,
})

const mapDispatchToProps = {
    getTag,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagPageContainer)
