import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { HeaderContainer } from 'containers'
import { Tag } from 'components'
import { getTag } from 'actions'

class TagPageContainer extends Component {
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
            <Fragment>
                <HeaderContainer />
                <Tag tag={selectedTag} />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ selectedTag, tags }) => ({
    selectedTag,
    tags
})

const mapDispatchToProps = {
    getTag
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TagPageContainer)
