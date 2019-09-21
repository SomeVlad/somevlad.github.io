import { connect } from 'react-redux'
import { getPosts } from 'actions'
import { PostPreviewList } from 'components'
import {
    selectPostCollection,
    selectPostIds,
} from 'selectors/posts'

const mapStateToProps = state => ({
    posts: selectPostCollection(state),
    postIds: selectPostIds(state),
})

const mapDispatchToProps = {
    getPosts,
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PostPreviewList)
