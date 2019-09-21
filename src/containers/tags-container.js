import { connect } from 'react-redux'
import { getTags } from 'actions'
import { selectTagCollection, selectTagIds } from 'selectors/tags'
import { Tags } from 'components/tags'

const mapStateToProps = state => ({
    tags: selectTagCollection(state),
    tagIds: selectTagIds(state),
})

const mapDispatchToProps = {
    getTags,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Tags)
